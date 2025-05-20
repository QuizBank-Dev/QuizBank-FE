import { GroupList } from '@/types/group'
import axiosInstance from '../base'
import { Response } from '@/types/base'

/**
 * 그룹 정보 리스트를 조회 요청하는 함수
 * @param cursor 기준이 되는 그룹의 ID
 * @param limit 불러올 항목 개수
 * @param name 그룹 제목 검색
 * @param theme api 분기(전체 그룹, 나의 그룹)
 */
export const getGroupList = async (
    theme: string,
    cursor?: string,
    limit: number = 10,
    name?: string,
) => {
    const params = new URLSearchParams()
    if (cursor) params.append('cursor', cursor)
    params.append('limit', limit.toString())
    if (name) params.append('name', name)

    const res = await axiosInstance.get<Response<GroupList>>(
        theme === 'total'
            ? `/v1/group?${params.toString()}`
            : `/v1/group/my?${params.toString()}`,
    )
    return res.data.result
}
