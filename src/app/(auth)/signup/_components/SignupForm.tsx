'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput } from '@/components'
import { useEmailVerification } from '@/hooks/useEmailVerification'
import LoadingButton from '../../_components/LoadingButton'

const schema = z
    .object({
        email: z.string().email('이메일 형식으로 입력해주세요.'),
        code: z.string(),
        password: z
            .string()
            .nonempty('필수 입력되어야하는 항목입니다.')
            .regex(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_=+\\|/?,.<>;:'"[\]{}]+$/,
                '비밀번호는 8자리 이상, 영문과 숫자를 1가지 이상 조합해주세요.',
            )
            .min(
                8,
                '비밀번호는 8자리 이상, 영문과 숫자를 1가지 이상 조합해주세요.',
            ),
        confirmPassword: z
            .string()
            .nonempty('필수로 입력되어야하는 항목입니다.'),
        nickname: z.string().nonempty('필수로 입력되어야하는 항목입니다.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['confirmPassword'],
    })

type FormData = z.infer<typeof schema>

export default function SignupForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    })
    const { isVerified, isVerifying, isSending, timer, sendCode, verifyCode } =
        useEmailVerification()

    const handleFormSubmit = async (data: FormData) => {
        setIsLoading(true)
        // TODO 회원가입 API 호출
        const result = await new Promise<string>((resolve) =>
            setTimeout(() => {
                console.log(data)
                resolve('FAIL')
            }, 2000),
        )
        setIsLoading(false)

        if (result === 'OK') {
            // 가입 완료 처리
            router.push('/')
        } else {
            // 가입 실패 처리
            toast('ERROR')
        }
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
                            onClick={() => verifyCode('', '')}
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
