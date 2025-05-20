import axiosInstance from '@/lib/api/base'
import { PaginationResponse } from '@/types/base'
import { PaginationParams } from '@/types/api/base'
import { Comment } from '@/types/comment'

export const getMyComment = async (params: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<Comment[]>>(
        'v1/comment/me',
        {
            params,
        },
    )
    return res.data
}
