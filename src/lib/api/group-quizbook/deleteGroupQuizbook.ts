import { EmptyResponse } from '@/types/base'
import axiosInstance from '../base'

/**
 * 그룹 선정 문제집 삭제를 요청하는 함수
 * @param groupId 그룹의 ID
 * @param quizbookId 문제집의 ID
 */
export const deleteGroupQuizbook = async (
    groupId: string,
    quizbookId: string,
) => {
    await axiosInstance.delete<EmptyResponse>(
        `/v1/group/${groupId}/quizbook/${quizbookId}`,
    )
}
