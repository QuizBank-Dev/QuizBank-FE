import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '@/lib/api/user'
import { QueryKey } from '@/constants/common/queryKey'

export const useUpdateProfileMutation = (
    cancelEditMode: () => void,
    setLoading: (state: boolean) => void,
) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateProfile,
        onMutate: () => {
            setLoading(true)
        },
        onSuccess: () => {
            // 정확하게 일치하는 경우에만 처리되도록
            queryClient
                .invalidateQueries({
                    queryKey: QueryKey.user.DEFAULT,
                    exact: true,
                })
                .then(() => {
                    // 처리가 완료된 이후에 editMode 종료
                    toast('정상적으로 처리되었습니다.')
                    cancelEditMode()
                    setLoading(false)
                })
        },
        onError: () => {
            setLoading(false)
            toast('프로필 수정 중 오류가 발생했습니다.')
        },
    })
}
