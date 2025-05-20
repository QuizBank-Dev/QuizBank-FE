import axiosInstance from '@/lib/api/base'
import { FollowerType } from '@/types/api/follow'

export const follow = async (targetId: string) => {
    return (await axiosInstance.post(`v1/follow/${targetId}`)).data
}

export const cancelFollow = async (
    targetId: string,
    type: Exclude<FollowerType, 'all'>,
) => {
    return (
        await axiosInstance.delete(`v1/follow/${targetId}`, {
            params: {
                type,
            },
        })
    ).data
}
