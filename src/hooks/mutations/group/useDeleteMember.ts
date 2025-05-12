import { deleteMember } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 그룹원을 강퇴하는 mutation
 */
export const useDeleteMember = (groupId: string, memberId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteMember(groupId, memberId),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['group', groupId] })
            router.back()
            toast('강퇴가 완료되었습니다!')
        },
    })
}
