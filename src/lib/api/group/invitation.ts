import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'

/**
 * 초대코드로 그룹 가입 함수
 * @param token 초대코드
 * @param cookie (Server) 쿠키
 */
export const invitation = async (token: string, cookie?: string) => {
    return await axiosInstance.post<EmptyResponse>(
        'v1/group/invitation',
        {
            inviteCode: token,
        },
        cookie
            ? {
                  headers: {
                      Cookie: cookie,
                  },
              }
            : undefined,
    )
}
