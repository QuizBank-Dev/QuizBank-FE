import { GroupInfoFormData } from '@/app/group/[groupId]/info/@main/_components/GroupInfo'
import { patchGroup } from '@/lib/api'
import { Group } from '@/types/group'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

/**
 * 그룹 정보를 수정하는 mutation
 */
export const usePatchGroup = (groupId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: GroupInfoFormData) => patchGroup(groupId, data),
        retry: 0,
        onSuccess: (_, variables) => {
            queryClient.setQueryData(['group', groupId], (oldData: Group) => {
                return {
                    ...oldData,
                    name: variables.name,
                    description: variables.description,
                }
            })
            toast('그룹 정보 수정이 완료되었습니다!')
        },
    })
}
