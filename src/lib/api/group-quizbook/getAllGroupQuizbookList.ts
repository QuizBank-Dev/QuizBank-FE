import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { AllGroupQuizbook } from '@/types/groupQuizbook'

export const getAllGroupQuizbookList = async (params?: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<AllGroupQuizbook[]>>(
        '/v1/quizbook/group',
        { params },
    )

    return res.data.result
}
