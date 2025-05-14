import { QuizbookStates } from '@/types/quizbook'
import axiosInstance from '../base'
import { Response } from '@/types/base'

/**
 * 문제집 통계 정보 조회
 * @param quizbookId 조회할 문제집의 ObjectId
 * @returns 문제집 통계 정보(QuizbookStates 타입)
 */
export const getQuizbookStates = async (quizbookId: string) => {
    const res = await axiosInstance.get<Response<QuizbookStates>>(
        `/quizbook/${quizbookId}/states`,
    )

    return res.data.result
}
