import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { Comment } from '@/types/comment'

export const getCommentList = async (
    quizId: string,
    params?: PaginationParams,
) => {
    const res = await axiosInstance.get<PaginationResponse<Comment[]>>(
        `/v1/comment/quiz/${quizId}`,
        {
            params,
        },
    )

    return res.data.result
}
