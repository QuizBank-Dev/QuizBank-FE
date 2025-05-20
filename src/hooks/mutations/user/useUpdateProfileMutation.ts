import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProfileImage, updateProfile } from '@/lib/api/user'
import { QueryKey } from '@/constants/common/queryKey'
import { CurrentUser } from '@/types/user'

export const useUpdateProfileMutation = (
    cancelEditMode: () => void,
    setLoading: (state: boolean) => void,
) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateProfile,
        onMutate: async (formData) => {
            await queryClient.cancelQueries({ queryKey: QueryKey.user.DEFAULT })

            setLoading(true)

            const prevData = queryClient.getQueryData<CurrentUser>(
                QueryKey.user.DEFAULT,
            )

            if (!!prevData?.profileImg && !formData.profileImg) {
                // 프로필 이미지가 삭제된 경우 삭제 API 호출
                await deleteProfileImage()
            }
        },
        onSuccess: () => {
            queryClient
                .invalidateQueries({
                    queryKey: QueryKey.user.DEFAULT,
                    // 정확하게 일치하는 경우에만 처리되도록
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
