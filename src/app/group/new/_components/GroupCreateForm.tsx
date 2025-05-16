'use client'

import { CustomInput, LoopAnimation } from '@/components'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { postGroup } from '@/lib/api/group'
import { GroupFormData, groupSchema } from '@/types/schemas/group'

export default function GroupCreateForm() {
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<GroupFormData>({
        resolver: zodResolver(groupSchema),
        mode: 'onChange',
    })
    const router = useRouter()

    const handleFormSubmit = async (data: GroupFormData) => {
        setIsLoading(true)
        await postGroup(data)
            .then((res) => {
                router.push(`/group/${res._id}/info`)
            })
            .catch((error) => {
                setIsLoading(false)
                toast(error.response.data.message)
            })
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(handleFormSubmit)}
                className="flex w-full flex-col gap-3"
            >
                <div className="flex flex-col gap-4">
                    <CustomInput
                        id="name"
                        name="name"
                        label="그룹 이름"
                        placeholder="그룹 이름을 입력해주세요"
                        style="solid"
                        disabled={isLoading}
                    />
                    <CustomInput
                        id="description"
                        name="description"
                        label="그룹 소개(50자 이하)"
                        placeholder="그룹 소개를 입력해주세요"
                        area={true}
                        style="solid"
                        disabled={isLoading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={clsx(
                        'btn-solid btn-mobile-lg md:btn-pc-lg',
                        isLoading && 'btn-loading',
                    )}
                >
                    {isLoading && <LoopAnimation />}
                    {isLoading ? 'Loading...' : '생성하기'}
                </button>
            </form>
        </FormProvider>
    )
}
