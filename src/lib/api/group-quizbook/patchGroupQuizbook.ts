import { EmptyResponse } from '@/types/base'
import axiosInstance from '../base'
import { EditEndDate } from '@/types/groupQuizbook'

/**
 * 그룹 선정 문제집 마감일을 수정하는 함수
 * @param groupId 그룹의 ID
 * @param quizbookId 문제집의 ID
 * @param data 새로 지정한 마감일
 */
export const patchGroupQuizbook = async (
    groupId: string,
    quizbookId: string,
    data: EditEndDate,
) => {
    await axiosInstance.patch<EmptyResponse>(
        `/v1/group/${groupId}/quizbook/${quizbookId}`,
        data,
    )
}
