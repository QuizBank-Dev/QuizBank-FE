import axios from 'axios'
import { isServer } from '@tanstack/react-query'
import { CurrentUser } from '@/types/user'

/**
 * 현재 로그인 되어있는 사용자의 정보를 조회하는 함수
 * @param cookie 서버에서 호출의 경우 쿠키를 직접 작성하기 위한 매개변수
 */
export const getCurrentUser = async (cookie: string = '') => {
    // TODO API 호출 방식 수정 필요
    const res = await axios.get<{ result: CurrentUser | null }>(
        `${process.env.NEXT_PUBLIC_API_URL}v1/user/me`,
        {
            withCredentials: true,
            headers: isServer
                ? {
                      Cookie: cookie,
                  }
                : undefined,
        },
    )
    return res.data?.result || null
}
