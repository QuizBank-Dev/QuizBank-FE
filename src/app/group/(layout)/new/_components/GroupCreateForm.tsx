'use client'

import { CustomInput, LoopAnimation } from '@/components'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'

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

export default function GroupCreateForm() {
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    })

    const handleFormSubmit = async (data: FormData) => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log('Form Data:', data)
            setIsLoading(false)
        }, 2000)
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
                        error={methods.formState.errors.name?.message}
                        disabled={isLoading}
                    />
                    <CustomInput
                        id="description"
                        name="description"
                        label="그룹 소개(50자 이하)"
                        placeholder="그룹 소개를 입력해주세요"
                        style="solid"
                        error={methods.formState.errors.description?.message}
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
