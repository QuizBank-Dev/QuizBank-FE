import axiosInstance from '@/lib/api/base'
import {
    ChangePasswordFormData,
    ForgotPasswordFormData,
    ResetPasswordFormData,
} from '@/types/schemas/auth'
import { EmptyResponse } from '@/types/base'

/**
 * 비밀번호 재설정 메일을 요청하는 함수
 * @param email 비밀번호를 재설정할 이메일 주소
 */
export const requestResetPassword = async ({
    email,
}: ForgotPasswordFormData) => {
    return await axiosInstance.post<EmptyResponse>(
        'v1/auth/reset-password/request',
        { email },
    )
}

/**
 * 비밀번호를 재설정하는 함수
 * @param token 발급받은 토큰
 * @param newPassword 변경할 비밀번호
 */
export const confirmResetPassword = async (
    token: string,
    { newPassword }: ResetPasswordFormData,
) => {
    return await axiosInstance.post<EmptyResponse>(
        'v1/auth/reset-password/confirm',
        {
            token,
            newPassword,
        },
    )
}

/**
 * 비밀번호를 변경하는 함수
 * @param password 이전 비밀번호
 * @param newPassword 변경할 비밀번호
 */
export const changePassword = async ({
    password,
    newPassword,
}: ChangePasswordFormData) => {
    return await axiosInstance.patch('v1/auth/password', {
        password,
        newPassword,
    })
}
