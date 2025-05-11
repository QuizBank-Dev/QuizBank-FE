import { patchApplyResponse } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

/**
 * 그룹 가입 요청 수락 또는 거절하는 mutation
 */
export const usePatchApplyResponse = (groupId: string) => {
    const queryClient = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: (accepted: boolean) =>
            patchApplyResponse(groupId, { accepted }),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['group', groupId] })
            router.back()
            toast('처리 완료되었습니다!')
        },
    })
}
