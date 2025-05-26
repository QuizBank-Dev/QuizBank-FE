'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import {
    ResetPasswordFormData,
    resetPasswordSchema,
} from '@/types/schemas/auth'

export default function ResetForm() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const methods = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async ({ newPassword }: ResetPasswordFormData) => {
        const token = searchParams.get('token')

        // API 호출
        console.log(token, newPassword)
        router.push('/login')
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-3"
                onSubmit={methods.handleSubmit(handleFormSubmit)}
            >
                <CustomInput
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요"
                    style="solid"
                />
                <CustomInput
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    type="password"
                    label="비밀번호확인"
                    placeholder="비밀번호를 다시 입력해주세요"
                    style="solid"
                />
                <button
                    type="submit"
                    className="btn-solid btn-mobile-lg md:btn-pc-lg"
                >
                    비밀번호 재설정
                </button>
            </form>
        </FormProvider>
    )
}
