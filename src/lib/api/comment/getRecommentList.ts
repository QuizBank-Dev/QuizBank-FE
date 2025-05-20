import { PaginationResponse } from '@/types/base'
import axiosInstance from '../base'
import { Comment } from '@/types/comment'
import { PaginationParams } from '@/types/api/base'

export const getRecommentList = async (
    commentId: string,
    params: PaginationParams,
) => {
    const res = await axiosInstance.get<PaginationResponse<Comment[]>>(
        `/v1/comment/${commentId}`,
        { params },
    )

    return res.data.result
}
