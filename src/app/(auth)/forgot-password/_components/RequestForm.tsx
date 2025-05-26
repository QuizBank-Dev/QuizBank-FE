'use client'

import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import {
    ForgotPasswordFormData,
    forgotPasswordSchema,
} from '@/types/schemas/auth'

export default function RequestForm() {
    const router = useRouter()

    const methods = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async ({ email }: ForgotPasswordFormData) => {
        // API 호출
        console.log(email)
        router.push('/login')
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-3"
                onSubmit={methods.handleSubmit(handleFormSubmit)}
            >
                <CustomInput
                    id="email"
                    name="email"
                    label="비밀번호를 재설정 할 이메일"
                    placeholder="이메일 주소를 입력해주세요"
                    style="solid"
                />
                <button
                    type="submit"
                    className="btn-solid btn-mobile-lg md:btn-pc-lg"
                >
                    비밀번호 재설정 메일 전송
                </button>
            </form>
        </FormProvider>
    )
}
