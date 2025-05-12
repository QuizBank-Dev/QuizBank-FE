import { deleteWithdraw } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

/**
 * 그룹을 탈퇴하는 mutation
 */
export const useDeleteWithdraw = (
    groupId: string,
    onSuccessCallback?: () => void,
) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: () => deleteWithdraw(groupId),
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
