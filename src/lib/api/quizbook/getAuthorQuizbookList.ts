import axiosInstance from '@/lib/api/base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'
import { PaginationParams } from '@/types/api/base'

export const getAuthorQuizbookList = async (
    authorId: string,
    params: PaginationParams,
) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook<string>[]>>(
        `v1/quizbook/author/${authorId}`,
        { params },
    )
    return res.data
}
