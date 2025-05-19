import { PaginationParams } from '@/types/api/base'
import axiosInstance from '../base'
import { PaginationResponse } from '@/types/base'
import { SolvedAnswer } from '@/types/study'

export const getSolvedAnswerList = async (
    quizId: string,
    params: PaginationParams,
) => {
    const res = await axiosInstance.get<PaginationResponse<SolvedAnswer[]>>(
        `/v1/study/quiz/${quizId}/answer`,
        {
            params,
        },
    )

    return res.data.result
}
