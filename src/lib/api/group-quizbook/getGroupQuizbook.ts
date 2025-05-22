import axiosInstance from '../base'
import { Response } from '@/types/base'
import { GroupQuizbookMeta } from '@/types/groupQuizbook'

/**
 * 그룹 선정 문제집 정보를 조회하는 함수
 * @param groupId 그룹의 ID
 * @param quizbookId 문제집의 ID
 */
export const getGroupQuizbook = async (groupId: string, quizbookId: string) => {
    const res = await axiosInstance.get<Response<GroupQuizbookMeta>>(
        `/v1/group/${groupId}/quizbook/${quizbookId}`,
    )
    return res.data.result
}
