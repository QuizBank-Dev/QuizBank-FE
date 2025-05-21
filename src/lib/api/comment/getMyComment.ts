import axiosInstance from '@/lib/api/base'
import { PaginationResponse } from '@/types/base'
import { PaginationParams } from '@/types/api/base'
import { MyComment } from '@/types/comment'

export const getMyComment = async (params: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<MyComment[]>>(
        'v1/comment/me',
        {
            params,
        },
    )
    return res.data
}
