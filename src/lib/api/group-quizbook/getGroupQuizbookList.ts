import axiosInstance from '../base'
import { Response } from '@/types/base'
import { GroupQuizbookList } from '@/types/groupQuizbook'

/**
 * 그룹 선정 문제집 리스트를 조회 요청하는 함수
 * @param groupId 그룹의 ID
 * @param standard 조회 시간대
 * @param limit 조회 페이지당 개수
 * @param status 마감 상태
 * @param sort 정렬 방향
 * @param cursor 무한스크롤 커서가 되는 Group 선정 문제집 마감일
 */
export const getGroupQuizbookList = async (
    groupId: string,
    standard: string,
    limit: number = 10,
    status: string,
    sort: string,
    cursor?: string,
) => {
    const params = new URLSearchParams()
    params.append('standard', standard)
    params.append('limit', limit.toString())
    params.append('status', status)
    params.append('sort', sort)
    if (cursor) params.append('cursor', cursor)

    const res = await axiosInstance.get<Response<GroupQuizbookList>>(
        `/v1/group/${groupId}/quizbook?${params.toString()}`,
    )
    return res.data.result
}
