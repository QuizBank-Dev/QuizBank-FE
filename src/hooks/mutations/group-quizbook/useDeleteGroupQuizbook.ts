import { deleteGroupQuizbook } from '@/lib/api/group-quizbook'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 그룹 선정 문제집을 삭제하는 mutation
 */
export const useDeleteGroupQuizbook = (groupId: string, quizbookId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteGroupQuizbook(groupId, quizbookId),
        retry: 0,
        onSuccess: () => {
            queryClient.removeQueries({
                queryKey: ['group-quizbook', groupId, quizbookId],
            })
            router.push(`/group/${groupId}/quizbook`)
            toast('선정 해제되었습니다!')
        },
    })
}
