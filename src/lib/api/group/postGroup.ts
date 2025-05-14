import axiosInstance from '../base'
import { Response } from '@/types/base'
import { CreateGroupResponse } from '@/types/group'
import { GroupFormData } from '@/types/schemas/group'

/**
 * 그룹을 생성하는 함수
 * @param data 그룹 생성에 필요한 그룹 이름, 그룹 소개 정보
 */
export const postGroup = async (data: GroupFormData) => {
    const res = await axiosInstance.post<Response<CreateGroupResponse>>(
        '/v1/group',
        data,
    )
    return res.data.result
}
