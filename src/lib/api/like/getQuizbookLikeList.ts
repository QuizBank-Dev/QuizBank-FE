import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'

export const getQuizbookLikeList = async (params?: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook[]>>(
        '/v1/like/quizbook/me',
        { params },
    )

    return res.data.result
}
