import { SolvedAnswer } from '@/types/study'
import axiosInstance from '../base'
import { Response } from '@/types/base'

/**
 * 특정 퀴즈에 대한 그룹원들의 답안들을 조회 요청하는 함수
 * @param quizId 퀴즈의 ID
 * @param groupId 그룹의 ID
 */
export const getGroupMemberAnswer = async (quizId: string, groupId: string) => {
    const params = new URLSearchParams()
    params.append('groupId', groupId)

    const res = await axiosInstance.get<Response<SolvedAnswer[]>>(
        `/v1/study/quiz/${quizId}/answer?${params.toString()}`,
    )
    return res.data.result
}
