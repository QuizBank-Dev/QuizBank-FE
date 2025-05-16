import { Response } from '@/types/base'
import axiosInstance from '../base'
import { GroupInviteUrl } from '@/types/group'

/**
 * 그룹 초대 링크를 조회 요청하는 함수
 * @param groupId 초대 링크를 조회하는 그룹의 ID
 */
export const getInviteURL = async (groupId: string) => {
    const res = await axiosInstance.get<Response<GroupInviteUrl>>(
        `/v1/group/${groupId}/invitation`,
    )
    return res.data.result
}
