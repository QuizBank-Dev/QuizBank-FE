import { EditReview } from '@/types/review'
import axiosInstance from '../base'
import { EmptyResponse } from '@/types/base'

/**
 * 리뷰 수정을 요청하는 함수
 * @param reviewId 수정할 리뷰의 ID
 * @param data 리뷰 수정에 필요한 리뷰 점수, 리뷰 내용
 */
export const patchReview = async (reviewId: string, data: EditReview) => {
    await axiosInstance.patch<EmptyResponse>(`/v1/review/${reviewId}`, data)
}
