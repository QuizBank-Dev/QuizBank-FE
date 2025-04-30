'use client'

import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEmailVerification } from '@/hooks/useEmailVerification'
import { CustomInput } from '@/components'
import LoadingButton from '../../_components/LoadingButton'

const schema = z.object({
    email: z.string().email(),
    code: z.string(),
})

type FormData = z.infer<typeof schema>

export default function ResetForm() {
    const router = useRouter()
    const { isVerified, isVerifying, isSending, timer, sendCode, verifyCode } =
        useEmailVerification('reset-password')
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    })

    const handleFormSubmit = async ({ email, code }: FormData) => {
        await verifyCode(email, code)
        router.push('/login')
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-3"
                onSubmit={methods.handleSubmit(handleFormSubmit)}
            >
                <div className="flex items-center gap-1">
                    <CustomInput
                        id="email"
                        name="email"
                        label="비밀번호를 초기화 할 이메일"
                        placeholder="이메일 주소를 입력해주세요"
                        style="solid"
                        disabled={isVerified}
                    />
                    <LoadingButton
                        className="w-32 shrink-0 !px-0 md:mt-1"
                        isLoading={isSending}
                        loadingMessage="전송중"
                        onClick={() => sendCode('')}
                        disabled={isVerified}
                    >
                        {timer === 0 ? '인증번호 전송' : '재전송'}
                    </LoadingButton>
                </div>
                <CustomInput
                    id="code"
                    name="code"
                    label="인증번호"
                    placeholder="인증번호를 입력해주세요"
                    style="solid"
                    disabled={timer === 0 || isVerified}
                />
                <LoadingButton
                    type="submit"
                    size="lg"
                    isLoading={isVerifying}
                    loadingMessage="인증중"
                    disabled={timer === 0 || isVerified}
                >
                    {!isVerified ? '비밀번호 초기화 메일 전송' : '전송완료'}
                </LoadingButton>
            </form>
        </FormProvider>
    )
}
