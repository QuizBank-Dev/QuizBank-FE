import { Comment } from '@/types/comment'
import axiosInstance from '../base'
import { Response } from '@/types/base'

export const patchComment = async (
    commentId: string,
    body: { content: string },
) => {
    const res = await axiosInstance.patch<Response<Comment>>(
        `/v1/comment/${commentId}`,
        body,
    )

    return res.data.result
}
