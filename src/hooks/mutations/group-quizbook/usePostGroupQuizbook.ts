import { postGroupQuizbook } from '@/lib/api/group-quizbook'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 그룹에 선정 문제집 추가하는 mutation
 */
export const usePostGroupQuizbook = (groupId: string, quizbookId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (endDate: string) =>
            postGroupQuizbook(groupId, quizbookId, endDate),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['group-quizbook-list', groupId],
            })
            router.push(`/quizbook/${quizbookId}/info`)
            toast('그룹에 추가되었습니다!')
        },
    })
}
