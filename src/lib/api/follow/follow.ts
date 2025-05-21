import axiosInstance from '@/lib/api/base'
import { FollowerType } from '@/types/api/follow'

/**
 * 특정 사용자를 팔로우하는 함수
 * @param targetId 팔로우 대상 사용자의 아이디
 */
export const follow = async (targetId: string) => {
    return (await axiosInstance.post(`v1/follow/${targetId}`)).data
}

/**
 * 특정 사용자를 팔로우 목록에서 제거하는 함수
 * @param targetId 팔로우 취소 대상 사용자의 아이디
 * @param type 팔로우 타입
 *   - `following`: 내가 팔로우하는 사용자 (default)
 *   - `follower`: 나를 팔로우하는 사용자
 */
export const cancelFollow = async (
    targetId: string,
    type: FollowerType = 'following',
) => {
    return (
        await axiosInstance.delete(`v1/follow/${targetId}`, {
            params: {
                type,
            },
        })
    ).data
}
