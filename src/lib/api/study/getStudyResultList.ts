import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { StudyResultItem } from '@/types/study'

export const getSutdyResultList = async (params?: PaginationParams) => {
    const res = await axiosInstance.get<PaginationResponse<StudyResultItem[]>>(
        '/v1/study/result',
        { params },
    )

    return res.data.result
}
