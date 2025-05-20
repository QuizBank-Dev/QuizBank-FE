import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cancelFollow, follow } from '@/lib/api/follow'
import { QueryKey } from '@/constants/common/queryKey'
import { FollowerType } from '@/types/api/follow'

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
            type?: Exclude<FollowerType, 'all'>
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
