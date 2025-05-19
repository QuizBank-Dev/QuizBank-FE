import { postQuizbookLike } from '@/lib/api/like'
import { QuizbookUserFlags } from '@/types/quizbook'
import { useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * 특정 Quizbook의 찜 상태를 낙관적 업데이트하는 mutation
 */
export const usePostQuizbookLike = (quizbookId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => postQuizbookLike(quizbookId),
        retry: 0,
        // 낙관적 업데이트
        onMutate: async () => {
            // 백그라운드 쿼리 취소
            await queryClient.cancelQueries({
                queryKey: ['quizbook-flags', quizbookId],
            })

            // 이전 상태 유저 플래그 백업
            const previousFlags = queryClient.getQueryData([
                'quizbook-flags',
                quizbookId,
            ])

            // 유저 플래그 캐시에 선반영
            queryClient.setQueryData(
                ['quizbook-flags', quizbookId],
                (old: QuizbookUserFlags) => ({
                    ...old,
                    isLiked: !old.isLiked,
                }),
            )

            return { previousFlags }
        },
        onError: (_err, _variables, context) => {
            // 요청 실패 시, 복구
            if (context?.previousFlags) {
                queryClient.setQueryData(
                    ['quizbook-flags', quizbookId],
                    context.previousFlags,
                )
            }
        },
    })
}
