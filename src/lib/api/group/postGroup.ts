import { CreateGroupFormData } from '@/app/group/new/_components/GroupCreateForm'
import axiosInstance from '../base'

/**
 * 그룹을 생성하는 함수
 * @param data 그룹 생성에 필요한 그룹 이름, 그룹 소개 정보
 */
export const postGroup = async (data: CreateGroupFormData) => {
    const res = await axiosInstance.post<{ result: { _id: string } }>(
        '/v1/group',
        data,
    )
    return res.data.result
}
