import { deleteMember } from '@/lib/api/group/deleteMember'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

/**
 * 그룹을 탈퇴하는 mutation
 */
export const useDeleteMember = (groupId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteMember(groupId),
        retry: 0,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['group', groupId] })
            router.push('/group')
        },
    })
}
