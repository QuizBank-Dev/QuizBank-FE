'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import { useEmailVerification } from '@/hooks/useEmailVerification'
import { SignupFormData, signupSchema } from '@/types/schemas/auth'
import { signup } from '@/lib/api/auth'
import LoadingButton from '../../_components/LoadingButton'

export default function SignupForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        mode: 'onChange',
    })
    const { isVerified, isVerifying, isSending, timer, sendCode, verifyCode } =
        useEmailVerification()

    const handleFormSubmit = async (data: SignupFormData) => {
        setIsLoading(true)
        signup(data)
            .then((response) => {
                if (response.data.message === 'ok') {
                    router.push('/')
                } else {
                    toast('회원가입 중 오류가 발생했습니다.')
                }
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
                    <div className="flex items-center gap-1">
                        <CustomInput
                            id="email"
                            name="email"
                            label="이메일"
                            placeholder="이메일 주소를 입력해주세요"
                            style="solid"
                            disabled={isVerified}
                        />
                        <LoadingButton
                            className="w-32 shrink-0 !px-0 md:mt-1"
                            isLoading={isSending}
                            loadingMessage="전송중"
                            onClick={() => sendCode(methods.watch('email'))}
                            disabled={isVerified}
                        >
                            {timer === 0 ? '인증번호 전송' : '재전송'}
                        </LoadingButton>
                    </div>
                    <div className="flex items-center gap-1">
                        <CustomInput
                            id="code"
                            name="code"
                            label="인증번호"
                            placeholder="인증번호를 입력해주세요"
                            style="solid"
                            disabled={timer === 0 || isVerified}
                        />
                        <LoadingButton
                            className="w-32 shrink-0 !px-0 md:mt-1"
                            isLoading={isVerifying}
                            loadingMessage="인증중"
                            onClick={() =>
                                verifyCode(
                                    methods.watch('email'),
                                    methods.watch('code'),
                                )
                            }
                            disabled={timer === 0 || isVerified}
                        >
                            {!isVerified ? '확인' : '인증완료'}
                        </LoadingButton>
                    </div>
                    <CustomInput
                        id="password"
                        name="password"
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                        style="solid"
                    />
                    <CustomInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        label="비밀번호확인"
                        placeholder="비밀번호를 다시 입력해주세요"
                        style="solid"
                    />
                    <CustomInput
                        id="nickname"
                        name="nickname"
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        style="solid"
                    />
                </div>
                <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isLoading}
                    loadingMessage="Loading..."
                    disabled={!methods.formState.isValid || !isVerified}
                >
                    회원가입
                </LoadingButton>
            </form>
        </FormProvider>
    )
}
