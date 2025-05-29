import { EmptyResponse } from '@/types/base'
import axiosInstance from '../base'

export const deleteComment = async (commentId: string) => {
    const res = await axiosInstance.delete<EmptyResponse>(
        `/v1/comment/${commentId}`,
    )

    return res.data
}
