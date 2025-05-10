import axiosInstance from '../base'

/**
 * 그룹장 위임을 요청하는 함수
 * @param groupId 그룹장이 변할 그룹의 ID
 * @param data 그룹장이 될 그룹원의 ID
 */
export const patchOwner = async (
    groupId: string,
    data: { memberId: string },
) => {
    await axiosInstance.patch(`/v1/group/${groupId}/owner`, data)
}
