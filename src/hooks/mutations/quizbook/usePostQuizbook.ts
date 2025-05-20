import { postQuizbook } from '@/lib/api/quizbook'
import { PostQuizbookFormData } from '@/types/schemas/quizbook'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostQuizbook = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: PostQuizbookFormData) => postQuizbook(body),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['quizbook'],
            })
        },
        meta: {
            ignoreGlobalError: true,
        },
    })
}
