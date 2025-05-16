import { deleteGroup } from '@/lib/api/group'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

/**
 * 그룹을 삭제하는 mutation
 */
export const useDeleteGroup = (
    groupId: string,
    onSuccessCallback?: () => void,
) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteGroup(groupId),
        retry: 0,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['group', groupId] })
            router.push('/group')
        },
        onError: () => {
            onSuccessCallback?.()
        },
    })
}
