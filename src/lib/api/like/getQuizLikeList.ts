import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { QuizLike } from '@/types/like'

export const getQuizLikeList = async (params?: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<QuizLike>>(
        '/v1/like/quiz/me',
        { params },
    )

    return res.data.result
}
