'use client'

import { CustomInput, LoopAnimation, ProfileImage } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
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

type FormData = z.infer<typeof schema>

export default function GroupInfo() {
    const [isLoading, setIsLoading] = useState(false)
    const [isChangeMode, setIsChangeMode] = useState(false)
    const [backUp, setBackUp] = useState({
        name: '',
        description: '',
    })
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: backUp,
    })

    const { reset } = methods

    useEffect(() => {
        reset({
            name: '봄바르딜로 크로커딜로',
            description: '퉁퉁퉁퉁퉁퉁 사후르',
        })
        setBackUp({
            name: '봄바르딜로 크로커딜로',
            description: '퉁퉁퉁퉁퉁퉁 사후르',
        })
    }, [reset, setBackUp])

    const handleFormSubmit = async (data: FormData) => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log('Form Data:', data)
            setIsLoading(false)
            setBackUp(data)
            setIsChangeMode(false)
        }, 2000)
    }
    const handleCancel = () => {
        reset(backUp)
        setIsChangeMode(false)
    }

    return (
        <section className="w-full rounded-lg bg-white p-4 shadow-point md:mb-8 md:p-8">
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
                            placeholder="그룹 이름을 입력해주세요"
                            style="solid"
                            error={methods.formState.errors.name?.message}
                            disabled={isLoading || !isChangeMode}
                        />
                        <CustomInput
                            id="description"
                            name="description"
                            label="그룹 소개(50자 이하)"
                            placeholder="그룹 소개를 입력해주세요"
                            style="solid"
                            error={
                                methods.formState.errors.description?.message
                            }
                            disabled={isLoading || !isChangeMode}
                        />
                        <div className="flex w-full gap-4 pb-4">
                            <div className="flex flex-1 flex-col items-start gap-1">
                                <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                                    그룹장
                                </span>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <ProfileImage size={32} profileImg={''} />
                                    <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                                        닉네임
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-1">
                                <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                                    그룹 생성일
                                </span>
                                <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                                    2025-03-21
                                </span>
                            </div>
                        </div>
                    </div>
                    {isChangeMode ? (
                        <div className="flex w-full gap-[10px]">
                            <button
                                disabled={isLoading}
                                className="btn-outline btn-mobile-lg flex-1 md:btn-pc-lg"
                                onClick={handleCancel}
                            >
                                취소
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={clsx(
                                    'btn-solid btn-mobile-lg flex-1 md:btn-pc-lg',
                                    isLoading && 'btn-loading',
                                )}
                            >
                                {isLoading && <LoopAnimation />}
                                {isLoading ? 'Loading...' : '저장'}
                            </button>
                        </div>
                    ) : (
                        <button
                            className="btn-solid btn-mobile-lg w-full flex-1 md:btn-pc-lg"
                            onClick={() => setIsChangeMode(true)}
                        >
                            수정하기
                        </button>
                    )}
                </form>
            </FormProvider>
        </section>
    )
}
