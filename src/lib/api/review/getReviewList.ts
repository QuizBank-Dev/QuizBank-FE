import axiosInstance from '../base'
import { Response } from '@/types/base'
import { ReviewList } from '@/types/review'

/**
 * 문제집의 리뷰 리스트를 조회 요청하는 함수
 * @param quizbookId 문제집의 ID
 * @param limit 불러올 항목 개수
 * @param cursor 기준이 되는 리뷰의 ID
 */
export const getReviewList = async (
    quizbookId: string,
    limit: number = 3,
    cursor?: string,
) => {
    const params = new URLSearchParams()
    if (cursor) params.append('cursor', cursor)
    params.append('limit', limit.toString())

    const res = await axiosInstance.get<Response<ReviewList>>(
        `/v1/review/quizbook/${quizbookId}?${params.toString()}`,
    )
    return res.data.result
}
