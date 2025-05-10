import axiosInstance from '../base'

/**
 * 그룹을 삭제하는 함수
 * @param groupId 삭제하고자 하는 그룹의 ID
 */
export const deleteGroup = async (groupId: string) => {
    await axiosInstance.delete(`/v1/group/${groupId}`)
}
