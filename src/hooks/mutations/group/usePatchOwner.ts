import { patchOwner } from '@/lib/api/group'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 그룹장을 위임하는 mutation
 */
export const usePatchOwner = (groupId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (memberId: string) => patchOwner(groupId, { memberId }),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['group', groupId] })
            router.back()
            toast('그룹장 위임되었습니다!')
        },
    })
}
