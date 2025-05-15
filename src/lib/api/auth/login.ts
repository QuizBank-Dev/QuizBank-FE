import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'
import { LoginFormData } from '@/types/schemas/auth'
import { OAuthProvider } from '@/types/api/auth'

/**
 * 로그인
 * @param formData
 */
export const login = async (formData: LoginFormData) => {
    return await axiosInstance.post<EmptyResponse>('v1/auth/login', formData)
}

/**
 * OAuth 로그인
 * @param provider OAuth Provider
 * @param redirect 로그인 이후 redirect url
 */
export const oauthLogin = (
    provider: OAuthProvider,
    redirect = location.origin,
) => {
    window.open(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/oauth/${provider}?redirect=${redirect}`,
        '_self',
    )
}
