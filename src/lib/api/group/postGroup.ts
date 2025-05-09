import { CreateGroupFormData } from '@/app/group/new/_components/GroupCreateForm'
import axiosInstance from '../base'

/**
 * 그룹을 생성하는 함수
 * @param data 그룹 생성에 필요한 그룹 이름, 그룹 소개 정보
 */
export const postGroup = (data: CreateGroupFormData) => {
    return axiosInstance.post('/v1/group', data)
}
