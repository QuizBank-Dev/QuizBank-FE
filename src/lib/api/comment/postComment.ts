import { PostCommentBody } from '@/types/api/comment'
import axiosInstance from '../base'
import { Comment } from '@/types/comment'
import { Response } from '@/types/base'

export const postComment = async (quizId: string, body: PostCommentBody) => {
    const res = await axiosInstance.post<Response<Comment>>('/v1/comment', {
        quizId,
        ...body,
    })

    return res.data.result
}
