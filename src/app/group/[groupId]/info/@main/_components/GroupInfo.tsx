'use client'

import { CustomInput, LoopAnimation, ProfileImage } from '@/components'
import { usePatchGroup } from '@/hooks/mutations'
import { useCurrentUser, useGroupQuery } from '@/hooks/queries'
import { extractKSTDateOnly } from '@/utils/date/dateOnly'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

const schema = z.object({
    name: z
        .string()
        .min(3, { message: '그룹 이름은 3자 이상으로 해주세요' })
        .max(20, { message: '그룹 이름은 20자 이하로 해주세요' }),
    description: z
        .string()
        .min(1, { message: '그룹 소개는 꼭 입력해주세요' })
        .max(50, { message: '그룹 소개는 50자 이하로 해주세요' }),
})

export type GroupInfoFormData = z.infer<typeof schema>

export default function GroupInfo() {
    const [isChangeMode, setIsChangeMode] = useState(false)
    const [backUp, setBackUp] = useState({
        name: '',
        description: '',
    })
    const methods = useForm<GroupInfoFormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: backUp,
    })
    const { groupId } = useParams()
    const { data, isLoading } = useGroupQuery(groupId as string)
    const { mutate, isPending } = usePatchGroup(groupId as string, () => {
        setIsChangeMode(false)
    })
    const { data: userData } = useCurrentUser()

    const { reset } = methods

    useEffect(() => {
        if (!data) return
        reset({ name: data.name, description: data.description })
        setBackUp({ name: data.name, description: data.description })
    }, [reset, setBackUp, data])

    const handleFormSubmit = (data: GroupInfoFormData) => {
        mutate(data)
    }
    const handleCancel = () => {
        reset(backUp)
        setIsChangeMode(false)
    }

    return (
        <section className="w-full rounded-lg bg-white p-4 shadow-point md:p-8">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleFormSubmit)}
                    className="flex w-full flex-col items-center gap-3"
                >
                    <div className="flex w-full flex-col gap-4">
                        <CustomInput
                            id="name"
                            name="name"
                            label="그룹 이름"
                            placeholder={
                                data
                                    ? '그룹 이름을 입력해주세요'
                                    : '잠시만 기다려주세요...'
                            }
                            style="solid"
                            disabled={isLoading || isPending || !isChangeMode}
                        />
                        <CustomInput
                            id="description"
                            name="description"
                            label="그룹 소개(50자 이하)"
                            placeholder={
                                data
                                    ? '그룹 소개를 입력해주세요'
                                    : '잠시만 기다려주세요...'
                            }
                            style="solid"
                            area={true}
                            disabled={isLoading || isPending || !isChangeMode}
                        />
                        <div className="flex w-full gap-4 pb-4">
                            <div className="flex flex-1 flex-col items-start gap-1">
                                <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                                    그룹장
                                </span>
                                <Link
                                    href={`/user/${data?.admin._id}`}
                                    className="flex cursor-pointer items-center gap-2"
                                >
                                    {data && (
                                        <ProfileImage
                                            size={32}
                                            profileImg={`${data?.admin.profileImg}`}
                                        />
                                    )}
                                    <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                                        {data?.admin.nickname ||
                                            '잠시만 기다려주세요...'}
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-1">
                                <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                                    그룹 생성일
                                </span>
                                <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                                    {data
                                        ? extractKSTDateOnly(data.createdAt)
                                        : '잠시만 기다려주세요...'}
                                </span>
                            </div>
                        </div>
                    </div>
                    {data?.admin._id === userData?._id &&
                        (isChangeMode ? (
                            <div className="flex w-full gap-[10px]">
                                <button
                                    disabled={isLoading || isPending}
                                    className="btn-outline btn-mobile-lg flex-1 md:btn-pc-lg"
                                    onClick={handleCancel}
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading || isPending}
                                    className={clsx(
                                        'btn-solid btn-mobile-lg flex-1 md:btn-pc-lg',
                                        isLoading && 'btn-loading',
                                    )}
                                >
                                    {(isLoading || isPending) && (
                                        <LoopAnimation />
                                    )}
                                    {isLoading || isPending
                                        ? 'Loading...'
                                        : '저장'}
                                </button>
                            </div>
                        ) : (
                            <button
                                className="btn-solid btn-mobile-lg w-full flex-1 md:btn-pc-lg"
                                onClick={() => setIsChangeMode(true)}
                                disabled={!data}
                            >
                                수정하기
                            </button>
                        ))}
                </form>
            </FormProvider>
        </section>
    )
}
