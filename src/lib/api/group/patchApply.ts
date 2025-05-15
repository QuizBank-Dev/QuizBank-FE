import axiosInstance from '../base'

/**
 * 그룹 가입을 요청하는 함수
 * @param groupId 그룹의 ID
 */
export const patchApply = async (groupId: string) => {
    await axiosInstance.patch(`/v1/group/${groupId}/application`)
}
