import { PostQuizbookFormData } from '@/types/schemas/quizbook'
import axiosInstance from '../base'
import { EmptyResponse } from '@/types/base'

/**
 * 문제집 생성
 * @param body 생성할 문제집의 FormData
 * @returns 빈 응답 반환
 */
export const postQuizbook = async (body: PostQuizbookFormData) => {
    const res = await axiosInstance.post<EmptyResponse>('/v1/quizbook', body)

    return res.data
}
