import axiosInstance from '../base'

/**
 * 그룹원 강퇴를 요청하는 함수
 * @param groupId 그룹의 ID
 * @param memberId 강퇴를 당할 유저의 ID
 */
export const deleteMember = async (groupId: string, memberId: string) => {
    await axiosInstance.delete(`/v1/group/${groupId}/member/${memberId}`)
}
