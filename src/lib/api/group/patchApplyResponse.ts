import axiosInstance from '../base'

/**
 * 그룹 가입에 대해 수작 또는 거절을 요청하는 함수
 * @param groupId 그룹의 ID
 * @param data 수락 여부
 */
export const patchApplyResponse = async (
    groupId: string,
    data: { accepted: boolean },
) => {
    await axiosInstance.patch(`/v1/group/${groupId}/application-response`, data)
}
