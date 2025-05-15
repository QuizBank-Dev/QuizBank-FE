import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'
import { LoginFormData } from '@/types/schemas/auth'

export const login = async (formData: LoginFormData) => {
    return await axiosInstance.post<EmptyResponse>('v1/auth/login', formData)
}
