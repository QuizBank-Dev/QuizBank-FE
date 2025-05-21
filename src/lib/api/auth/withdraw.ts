import axiosInstance from '@/lib/api/base'

/**
 * 회원 탈퇴
 */
export const withdraw = () => {
    return axiosInstance.delete('v1/auth/withdraw')
}
