'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import { LoginFormData, loginSchema } from '@/types/schemas/auth'
import { EmptyResponse } from '@/types/base'
import { login } from '@/lib/api/auth'
import LoadingButton from '../../_components/LoadingButton'

export default function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onSubmit',
    })

    const handleFormSubmit = async (data: LoginFormData) => {
        setIsLoading(true)
        login(data)
            .then(() => {
                const token = searchParams.get('token')
                router.push(token ? `/group/invitation?token=${token}` : '/')
            })
            .catch((error: AxiosError<EmptyResponse>) => {
                toast(
                    error.response?.data.message ||
                        '로그인 중 오류가 발생했습니다.',
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
                <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    loadingMessage="Loading..."
                >
                    로그인
                </LoadingButton>
            </form>
        </FormProvider>
    )
}
