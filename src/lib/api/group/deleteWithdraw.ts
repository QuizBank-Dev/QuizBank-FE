import axiosInstance from '../base'

/**
 * 그룹 탈퇴 요청하는 함수
 * @param groupId 탈퇴하고자 하는 그룹의 ID
 */
export const deleteWithdraw = async (groupId: string) => {
    await axiosInstance.delete(`/v1/group/${groupId}/member`)
}
