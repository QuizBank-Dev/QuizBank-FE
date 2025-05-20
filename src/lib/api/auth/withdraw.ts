import axiosInstance from '@/lib/api/base'

export const withdraw = () => {
    return axiosInstance.delete('v1/auth/withdraw')
}
