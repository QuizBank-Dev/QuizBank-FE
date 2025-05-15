import axiosInstance from '@/lib/api/base'

/**
 * 로그아웃
 */
export const logout = async () => {
    return await axiosInstance.post('v1/auth/logout')
}
