import axiosInstance from '../base'

/**
 * 그룹 초대 링크를 조회 요청하는 함수
 * @param groupId 초대 링크를 조회하는 그룹의 ID
 */
export const getInviteURL = async (groupId: string) => {
    const res = await axiosInstance.get<{ result: { url: string } }>(
        `/v1/group/${groupId}/invitation`,
    )
    return res.data.result
}
