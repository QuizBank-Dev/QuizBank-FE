import { Response } from '@/types/base'
import axiosInstance from '../base'
import { QuizbookUserFlags } from '@/types/quizbook'

/**
 * 문제집 유저 플래그 조회
 * @param quizbookId 조회할 문제집의 ObjectId
 * @returns 문제집의 유저 플래그 정보(QuizbookUserFlags 타입)
 */
export const getQuizbookUserFlags = async (quizbookId: string) => {
    const res = await axiosInstance.get<Response<QuizbookUserFlags>>(
        `/quizbook/${quizbookId}/user-flags`,
    )

    return res.data
}
