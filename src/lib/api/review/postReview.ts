import axiosInstance from '../base'
import { Response } from '@/types/base'
import { CreateReview, ReviewCard } from '@/types/review'

/**
 * 문제집 리뷰를 생성 요청하는 함수
 * @param data 리뷰 생성에 필요한 리뷰 점수, 리뷰 내용, 문제집 ID
 */
export const postReview = async (data: CreateReview) => {
    const res = await axiosInstance.post<Response<ReviewCard>>(
        '/v1/review',
        data,
    )
    return res.data.result
}
