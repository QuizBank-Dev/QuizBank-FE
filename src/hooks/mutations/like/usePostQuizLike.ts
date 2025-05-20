import { postQuizLike } from '@/lib/api/like'
import { useMutation } from '@tanstack/react-query'

export const usePostQuizLike = (quizId: string) =>
    useMutation({
        mutationFn: () => postQuizLike(quizId),
        meta: {
            ignoreGlobalError: true,
        },
    })
