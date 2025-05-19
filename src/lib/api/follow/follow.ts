import axiosInstance from '@/lib/api/base'

export const follow = async (targetId: string) => {
    return (await axiosInstance.post(`v1/follow/${targetId}`)).data
}

export const cancelFollow = async (
    targetId: string,
    type: 'follower' | 'following',
) => {
    return (
        await axiosInstance.delete(`v1/follow/${targetId}`, {
            params: {
                type,
            },
        })
    ).data
}
