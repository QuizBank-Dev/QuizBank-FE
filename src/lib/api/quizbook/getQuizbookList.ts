import { QuizbookListParams } from '@/types/api/quizbook'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'

export const getQuizbookList = async (params: QuizbookListParams = {}) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook[]>>(
        '/quizbook',
        { params },
    )

    return res.data
}
