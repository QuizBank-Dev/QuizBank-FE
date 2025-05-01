'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import clsx from 'clsx'
import * as z from 'zod'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, LoopAnimation } from '@/components'

const schema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .nonempty()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_=+\\|/?,.<>;:'"[\]{}]+$/,
        ),
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onSubmit',
    })

    const handleFormSubmit = async (data: FormData) => {
        setIsLoading(true)
        // TODO API 호출
        const result = await new Promise<string>((resolve) =>
            setTimeout(() => {
                console.log(data)
                resolve('FAIL')
            }, 2000),
        )
        setIsLoading(false)

        if (result === 'OK') {
            // 로그인 완료 처리
            router.push('/')
        } else {
            // 로그인 실패 처리
            toast('이메일 또는 비밀번호를 확인해주세요.')
        }
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-3"
                onSubmit={methods.handleSubmit(handleFormSubmit)}
            >
                <div className="flex flex-col gap-2">
                    <CustomInput
                        id="email"
                        name="email"
                        label="이메일"
                        placeholder="이메일 주소를 입력해주세요"
                        style="solid"
                    />
                    <CustomInput
                        id="password"
                        name="password"
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                        style="solid"
                        disabled={isLoading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !methods.formState.isValid}
                    className={clsx(
                        'btn-solid btn-mobile-lg md:btn-pc-lg',
                        isLoading && 'btn-loading',
                    )}
                >
                    {isLoading && <LoopAnimation />}
                    {isLoading ? 'Loading...' : '로그인'}
                </button>
            </form>
        </FormProvider>
    )
}
