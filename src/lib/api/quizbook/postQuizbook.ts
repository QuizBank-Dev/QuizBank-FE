import { PostQuizbookFormData } from '@/types/schemas/quizbook'
import axiosInstance from '../base'
import { EmptyResponse } from '@/types/base'

export const postQuizbook = async (body: PostQuizbookFormData) => {
    const res = await axiosInstance.post<EmptyResponse>('/quizbook', body)

    return res.data
}
