import { EmptyResponse } from '@/types/base'
import axiosInstance from '../base'

/**
 * 그룹에 선정 문제집 추가를 요청하는 함수
 * @param groupId 그룹의 ID
 * @param quizbookId 문제집의 ID
 * @param endDate 마감일
 */
export const postGroupQuizbook = async (
    groupId: string,
    quizbookId: string,
    endDate: string,
) => {
    const res = await axiosInstance.post<EmptyResponse>(
        `/v1/group/${groupId}/quizbook/${quizbookId}`,
        {
            endDate,
        },
    )
    return res.data.result
}
