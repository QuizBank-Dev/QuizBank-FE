import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'

/**
 * 이메일 인증을 요청하는 함수
 * @param email 사용자의 이메일 주소
 */
export const generateCode = async (email: string) => {
    return await axiosInstance.post<EmptyResponse>(
        'v1/auth/verification/code',
        {
            email,
        },
    )
}

/**
 * 이메일을 인증하는 함수
 * @param email 사용자의 이메일 주소
 * @param code 이메일로 받은 인증코드
 */
export const verification = async (email: string, code: string) => {
    return await axiosInstance.post<EmptyResponse>('v1/auth/verification', {
        email,
        code,
    })
}
