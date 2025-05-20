import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postQuizbookLike } from '@/lib/api/like'

/**
 * 문제집리스트 페이지에서 문제집 좋아요를 진행하는 mutation
 */
export const usePostQuizbookListLike = (
    quizbookId: string,
    toggleLike: () => void,
) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => postQuizbookLike(quizbookId),
        retry: 0,
        onMutate: () => {
            toggleLike()
        },
        onError: () => {
            toggleLike()
            toast('저장 중 오류가 발생했습니다.')
        },
        onSuccess: ({ result: { state } }) => {
            toast(
                state
                    ? '찜목록에 추가되었습니다.'
                    : '찜목록에서 제거되었습니다.',
            )

            queryClient.invalidateQueries({
                queryKey: ['quizbook'],
            })
            // 상세 페이지의 쿼리 무효화 (이미 방문했다면 캐시되어있음)
            queryClient.invalidateQueries({
                queryKey: ['quizbook-flags', quizbookId],
                type: 'all',
            })
        },
    })
}
