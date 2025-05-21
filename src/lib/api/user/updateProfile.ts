import axiosInstance from '@/lib/api/base'
import { EditProfileFormData } from '@/types/schemas/user'
import { EmptyResponse } from '@/types/base'

/**
 * 사용자 프로필을 업데이트하는 함수
 * @param formData 수정된 데이터
 */
export const updateProfile = async (formData: Partial<EditProfileFormData>) => {
    return axiosInstance.patch<EmptyResponse>('v1/user/me', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

/**
 * 프로필사진을 삭제하는 함수
 */
export const deleteProfileImage = async () => {
    return axiosInstance.delete<EmptyResponse>('v1/user/me/profile-image')
}
