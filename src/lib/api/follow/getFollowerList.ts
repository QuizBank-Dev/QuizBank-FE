import axiosInstance from '@/lib/api/base'
import { Response } from '@/types/base'
import { Follower } from '@/types/user'
import { FollowerType } from '@/types/api/follow'

/**
 * 로그인한 사용자의 구독자 목록을 가져오는 함수
 */
export const getAllFollowerList = async () => {
    const res = await axiosInstance.get<
        Response<Record<Exclude<FollowerType, 'all'>, Follower[]>>
    >('v1/follow', { params: { type: 'all' } })

    return res.data?.result
}
