import axiosInstance from '@/lib/api/base'
import { CurrentUser } from '@/types/user'
import { Response } from '@/types/base'

/**
 * 현재 로그인 되어있는 사용자의 정보를 조회하는 함수
 * @param cookie 서버에서 호출의 경우 쿠키를 직접 작성하기 위한 매개변수
 */
export const getCurrentUser = async (cookie: string = '') => {
    const res = await axiosInstance.get<Response<CurrentUser>>(
        'v1/user/me',
        cookie
            ? {
                  headers: {
                      Cookie: cookie,
                  },
              }
            : undefined,
    )
    return res.data?.result || null
}
