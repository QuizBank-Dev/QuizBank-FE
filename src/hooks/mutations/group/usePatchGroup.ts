import { patchGroup } from '@/lib/api/group'
import { Group } from '@/types/group'
import { GroupFormData } from '@/types/schemas/group'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

/**
 * 그룹 정보를 수정하는 mutation
 */
export const usePatchGroup = (
    groupId: string,
    onSuccessCallback?: () => void,
) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: GroupFormData) => patchGroup(groupId, data),
        retry: 0,
        onSuccess: (_, variables) => {
            queryClient.setQueryData(['group', groupId], (oldData: Group) => {
                return {
                    ...oldData,
                    name: variables.name,
                    description: variables.description,
                }
            })
            onSuccessCallback?.()
            toast('그룹 정보 수정이 완료되었습니다!')
        },
    })
}
