import axiosInstance from '../base'

/**
 * 그룹 정보를 조회하는 함수
 * @param groupId 정보를 조회하고자 하는 그룹의 ID
 */
export const getGroup = (groupId: string) => {
    return axiosInstance.get(`/v1/group/${groupId}`)
}
