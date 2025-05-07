import { CreateGroupFormData } from '@/app/group/new/_components/GroupCreateForm'
import axios from 'axios'

/**
 * 그룹을 생성하는 함수
 * @param data 그룹 생성에 필요한 그룹 이름, 그룹 소개 정보
 */
export const createGroup = async (data: CreateGroupFormData) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/group`, data, {
        withCredentials: true,
    })
}
