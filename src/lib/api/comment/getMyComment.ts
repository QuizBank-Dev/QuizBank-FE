import axiosInstance from '@/lib/api/base'
import { PaginationResponse } from '@/types/base'
import { PaginationParams } from '@/types/api/base'
import { MyComment } from '@/types/comment'

/**
 * 내가 작성한 댓글 목록 조회 함수
 * @param params
 */
export const getMyComment = async (params: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<MyComment[]>>(
        'v1/comment/me',
        {
            params,
        },
    )
    return res.data
}
