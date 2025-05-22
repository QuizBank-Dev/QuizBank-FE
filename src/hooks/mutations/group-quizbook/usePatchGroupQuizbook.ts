import { patchGroupQuizbook } from '@/lib/api/group-quizbook'
import { EditEndDate, GroupQuizbookMeta } from '@/types/groupQuizbook'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

/**
 * 그룹 선정 문제집 마감일을 수정하는 mutation
 */
export const usePatchGroupQuizbook = (groupId: string, quizbookId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: EditEndDate) =>
            patchGroupQuizbook(groupId, quizbookId, data),
        retry: 0,
        onSuccess: (_, variables) => {
            queryClient.setQueryData(
                ['group-quizbook', groupId, quizbookId],
                (oldData: GroupQuizbookMeta) => {
                    return {
                        ...oldData,
                        endedAt: variables.endDate,
                    }
                },
            )
            toast('마감일이 수정되었습니다!')
        },
    })
}
