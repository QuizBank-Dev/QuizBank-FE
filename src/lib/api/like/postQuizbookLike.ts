import axiosInstance from '@/lib/api/base'
import { Response } from '@/types/base'

export const postQuizbookLike = async (quizbookId: string) => {
    const res = await axiosInstance.post<Response<{ state: boolean }>>(
        'v1/like/quizbook',
        { quizbookId },
    )
    return res.data
}
