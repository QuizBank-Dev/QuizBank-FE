import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cancelFollow, follow } from '@/lib/api/follow'
import { QueryKey } from '@/constants/common/queryKey'

export const useFollowMutation = (userId: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (isFollowed: boolean) => {
            const method = !isFollowed
                ? follow
                : (_id: string) => cancelFollow(_id, 'following')
            await method(userId)
            return !isFollowed
        },
        onSuccess: (isFollowing) => {
            toast(isFollowing ? `팔로우했습니다.` : '팔로우 취소했습니다.')
            queryClient.invalidateQueries({
                queryKey: QueryKey.user.other(userId),
            })
        },
        onError: () => {
            toast('팔로우 중 오류가 발생했습니다.')
        },
    })
}
