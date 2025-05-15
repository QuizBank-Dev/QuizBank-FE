import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'
import { SignupFormData } from '@/types/schemas/auth'

/**
 * 회원가입
 * @param formData 회원가입 FormData
 */
export const signup = async (formData: SignupFormData) => {
    return await axiosInstance.post<EmptyResponse>('v1/auth/signup', formData)
}
