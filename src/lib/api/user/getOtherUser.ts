import axiosInstance from '@/lib/api/base'
import { Response } from '@/types/base'
import { OtherUser } from '@/types/user'

/**
 * 사용자를 아이디로 조회하는 함수
 * @param id 조회할 사용자 아이디
 * @param cookie 서버에서 호출의 경우 쿠키를 직접 작성하기 위한 매개변수
 */
export const getOtherUser = async (id: string, cookie?: string) => {
    const res = await axiosInstance.get<Response<OtherUser>>(
        `v1/user/${id}`,
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
