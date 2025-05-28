'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import {
    ForgotPasswordFormData,
    forgotPasswordSchema,
} from '@/types/schemas/auth'
import { requestResetPassword } from '@/lib/api/auth'
import LoadingButton from '../../_components/LoadingButton'

export default function RequestForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const methods = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async (formData: ForgotPasswordFormData) => {
        setIsLoading(true)
        requestResetPassword(formData).finally(() => {
            toast('비밀번호 재설정 안내 메일이 전송되었습니다.')
            router.push('/login')
            setIsLoading(false)
        })
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
                <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    loadingMessage="Loading..."
                >
                    비밀번호 재설정 메일 전송
                </LoadingButton>
            </form>
        </FormProvider>
    )
}
