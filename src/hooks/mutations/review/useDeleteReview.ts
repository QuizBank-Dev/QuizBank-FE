import { deleteReview } from '@/lib/api/review'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 리뷰를 삭제하는 mutation
 */
export const useDeleteReview = (quizbookId: string, reviewId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteReview(reviewId),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['quizbook-reviews', quizbookId],
            })
            queryClient.invalidateQueries({
                queryKey: ['quizbook-states', quizbookId],
            })
            queryClient.removeQueries({
                queryKey: ['quizbook'],
            })
            router.push(`/quizbook/${quizbookId}/info`)
            toast('리뷰가 삭제되었습니다!')
        },
    })
}
