import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cancelFollow, follow } from '@/lib/api/follow'
import { QueryKey } from '@/constants/common/queryKey'
import { FollowerType } from '@/types/api/follow'

/**
 * 특정 사용자를 팔로우 / 팔로우 취소하는 함수
 * @param userId 팔로우/팔로우 취소 대상 사용자 아이디
 * @param toggleClickFollow 팔로우 상태를 toggle하는 함수
 */
export const useFollowMutation = (
    userId: string,
    toggleClickFollow?: () => void,
) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async ({
            isFollowed,
            type = 'following',
        }: {
            isFollowed: boolean
            type?: FollowerType
        }) => {
            const method = !isFollowed
                ? follow
                : (_id: string) => cancelFollow(_id, type)
            await method(userId)
            return !isFollowed
        },
        onSuccess: (isFollowing) => {
            queryClient
                .invalidateQueries({
                    queryKey: QueryKey.user.other(userId),
                    refetchType: 'all',
                })
                .then(() => {
                    if (toggleClickFollow) {
                        toggleClickFollow()
                    }
                    toast(
                        isFollowing
                            ? `팔로우했습니다.`
                            : '팔로우 취소했습니다.',
                    )
                })
        },
        onError: () => {
            toast('팔로우 처리 중 오류가 발생했습니다.')
        },
    })
}
