import { QueryKey } from '@/constants/common/queryKey'
import { patchComment } from '@/lib/api/comment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePatchComment = (commentId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: { content: string }) =>
            patchComment(commentId, body),
        onSuccess: (data) => {
            const { quiz: quizId } = data
            // 대댓글 리스트 캐시 무효화
            queryClient.invalidateQueries({
                queryKey: QueryKey.comment.RECOMMENT_LIST(commentId),
            })
            // 댓글 리스트 캐시 무효화
            queryClient.invalidateQueries({
                queryKey: QueryKey.comment.LIST(quizId),
            })
        },
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
    })
}
