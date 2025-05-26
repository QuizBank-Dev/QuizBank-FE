import { QueryKey } from '@/constants/common/queryKey'
import { postQuizLike } from '@/lib/api/like'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostQuizLike = (quizId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: () => postQuizLike(quizId),
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: QueryKey.like.QUIZ_LIST,
            })
        },
    })
}
