import { EmptyResponse } from '@/types/base'
import axiosInstance from '../base'

/**
 * 리뷰 삭제를 요청하는 함수
 * @param reviewId 삭제하고자 하는 리뷰의 ID
 */
export const deleteReview = async (reviewId: string) => {
    await axiosInstance.delete<EmptyResponse>(`/v1/review/${reviewId}`)
}
