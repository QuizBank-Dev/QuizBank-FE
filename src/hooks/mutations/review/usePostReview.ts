import { postReview } from '@/lib/api/review'
import { CreateReview } from '@/types/review'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 리뷰를 생성하는 mutation
 */
export const usePostReview = (quizbookId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (data: CreateReview) => postReview(data),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['quizbook-reviews', quizbookId],
            })
            queryClient.invalidateQueries({
                queryKey: ['quizbook-states', quizbookId],
            })
            router.push(`/quizbook/${quizbookId}/info`)
            toast('리뷰가 추가되었습니다!')
        },
    })
}
