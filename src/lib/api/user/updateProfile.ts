import axiosInstance from '@/lib/api/base'
import { EditProfileFormData } from '@/types/schemas/user'
import { EmptyResponse } from '@/types/base'

export const updateProfile = async (formData: Partial<EditProfileFormData>) => {
    return axiosInstance.patch<EmptyResponse>('v1/user/me', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
