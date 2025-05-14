import { QuizbookListParams } from '@/types/api/quizbook'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'

/**
 * 문제집 리스트 조회
 * @param params 쿼리 Parmas(QuizbookListParmas 타입)
 * @returns 문제집 리스트(Quizbook[] 타입)
 */
export const getQuizbookList = async (params: QuizbookListParams = {}) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook<string>[]>>(
        '/quizbook',
        { params },
    )

    return res.data.result
}
