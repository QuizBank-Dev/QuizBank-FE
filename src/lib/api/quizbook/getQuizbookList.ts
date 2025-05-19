import { QuizbookListParams } from '@/types/api/quizbook'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'

/**
 * 문제집 리스트 조회
 * @param params 쿼리 Parmas(QuizbookListParmas 타입)
 * @param cookie 서버에서 호출의 경우 쿠키를 직접 작성하기 위한 매개변수
 * @returns 문제집 리스트(Quizbook[] 타입)
 */
export const getQuizbookList = async (
    params: QuizbookListParams = {},
    cookie?: string,
) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook<string>[]>>(
        'v1/quizbook',
        { params, headers: { Cookie: cookie } },
    )

    return res.data.result
}
