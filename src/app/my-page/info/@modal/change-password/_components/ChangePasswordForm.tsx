'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import clsx from 'clsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, LoopAnimation } from '@/components'
import {
    ChangePasswordFormData,
    changePasswordSchema,
} from '@/types/schemas/auth'
import { changePassword } from '@/lib/api/auth'
import { AxiosError } from 'axios'
import { EmptyResponse } from '@/types/base'

export default function ChangePasswordForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<ChangePasswordFormData>({
        resolver: zodResolver(changePasswordSchema),
        mode: 'onChange',
    })

    const handleCloseModal = () => {
        router.back()
    }

    const handleFormSubmit = async (data: ChangePasswordFormData) => {
        setIsLoading(true)
        changePassword(data)
            .then(() => {
                handleCloseModal()
                toast('비밀번호 변경이 완료되었습니다.')
            })
            .catch((error: AxiosError<EmptyResponse>) => {
                const data = error.response?.data
                toast(
                    data
                        ? data.message
                        : '비밀번호 변경 중 오류가 발생했습니다.',
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
                    id="password"
                    name="password"
                    type="password"
                    label="이전 비밀번호"
                    placeholder="현재 비밀번호를 입력해주세요"
                    style="solid"
                />
                <CustomInput
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    label="변경할 비밀번호"
                    placeholder="변경할 비밀번호를 입력해주세요"
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
                <div className="flex w-full gap-2">
                    <button
                        type="button"
                        className="btn-outline btn-mobile-lg flex-1 md:btn-pc-lg"
                        onClick={handleCloseModal}
                        disabled={isLoading}
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        className={clsx(
                            'btn-solid btn-mobile-lg flex-1 md:btn-pc-lg',
                            isLoading && 'btn-loading',
                        )}
                        disabled={isLoading}
                    >
                        {isLoading && <LoopAnimation />}
                        {isLoading ? 'Loading...' : '저장'}
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}
