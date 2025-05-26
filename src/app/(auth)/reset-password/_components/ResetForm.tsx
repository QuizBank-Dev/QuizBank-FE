'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import {
    ResetPasswordFormData,
    resetPasswordSchema,
} from '@/types/schemas/auth'
import { EmptyResponse } from '@/types/base'
import { confirmResetPassword } from '@/lib/api/auth'
import LoadingButton from '../../_components/LoadingButton'

export default function ResetForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)

    const methods = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async (formData: ResetPasswordFormData) => {
        const token = searchParams.get('token')

        setIsLoading(true)
        confirmResetPassword(token || '', formData)
            .then(() => {
                router.push('/login')
                toast('비밀번호가 재설정되었습니다.')
            })
            .catch((error: AxiosError<EmptyResponse>) => {
                const data = error.response?.data
                toast(
                    data
                        ? data.message
                        : '비밀번호 재설정 중 오류가 발생했습니다.',
                )
            })
            .finally(() => {
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
                <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    loadingMessage="Loading..."
                >
                    비밀번호 재설정
                </LoadingButton>
            </form>
        </FormProvider>
    )
}
