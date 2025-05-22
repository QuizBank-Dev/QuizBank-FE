import { QuizGroupMemberScore } from '@/types/groupQuizbook'
import axiosInstance from '../base'
import { Response } from '@/types/base'

/**
 * 특정 문제집에 대한 그룹원들의 점수들을 조회 요청하는 함수
 * @param quizbookId 문제집의 ID
 * @param groupId 그룹의 ID
 */
export const getGroupMemberScore = async (
    quizbookId: string,
    groupId: string,
) => {
    const params = new URLSearchParams()
    params.append('groupId', groupId)

    const res = await axiosInstance.get<Response<QuizGroupMemberScore>>(
        `/v1/study/quizbook/${quizbookId}/score?${params.toString()}`,
    )
    return res.data.result
}
