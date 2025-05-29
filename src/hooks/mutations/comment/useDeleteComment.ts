import { QueryKey } from '@/constants/common/queryKey'
import { deleteComment } from '@/lib/api/comment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteComment = (
    commentId: string,
    quizId: string,
    parentId?: string,
) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => deleteComment(commentId),
        onSuccess: () => {
            // 상위 댓글의 리스트 캐시 무효화
            if (parentId)
                queryClient.invalidateQueries({
                    queryKey: QueryKey.comment.RECOMMENT_LIST(parentId),
                })
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
