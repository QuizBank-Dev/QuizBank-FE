import { GroupInfoFormData } from '@/app/group/[groupId]/info/_components/GroupInfo'
import axiosInstance from '../base'

/**
 * 그룹 정보를 수정하는 함수
 * @param groupId 수정하고자 하는 그룹의 ID
 * @param data 그룹 정보 수정 내용
 */
export const patchGroup = async (groupId: string, data: GroupInfoFormData) => {
    await axiosInstance.patch(`/v1/group/${groupId}`, data)
}
