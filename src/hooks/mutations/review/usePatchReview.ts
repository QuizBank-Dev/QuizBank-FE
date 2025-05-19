import { patchReview } from '@/lib/api/review'
import { EditReview } from '@/types/review'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 리뷰를 수정하는 mutation
 */
export const usePatchReview = (quizbookId: string, reviewId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (data: EditReview) => patchReview(reviewId, data),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['quizbook-reviews', quizbookId],
            })
            router.push(`/quizbook/${quizbookId}/info`)
            toast('리뷰가 수정되었습니다!')
        },
    })
}
