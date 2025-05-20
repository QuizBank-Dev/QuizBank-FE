import { QueryKey } from '@/constants/common/queryKey'
import { postComment } from '@/lib/api/comment/postComment'
import { PostCommentBody } from '@/types/api/comment'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostComment = (quizId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: PostCommentBody) => postComment(quizId, body),
        // TODO: 기존 캐싱 데이터 업데이트 로직으로 변경
        onSuccess: (_, variable) => {
            const { commentId } = variable
            // 대댓글 리스트 캐시 무효화
            if (commentId) {
                queryClient.invalidateQueries({
                    queryKey: QueryKey.comment.RECOMMENT_LIST(commentId),
                })
            }

            // 상위 댓글 리스트 캐시 무효화
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
