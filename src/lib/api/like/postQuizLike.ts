import { Response } from '@/types/base'
import axiosInstance from '../base'

export const postQuizLike = async (quizId: string) => {
    const res = await axiosInstance.post<Response<{ state: boolean }>>(
        '/v1/like/quiz',
        { quizId },
    )
    return res.data.result
}
