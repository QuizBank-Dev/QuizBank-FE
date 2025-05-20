import { PostStudyBody } from '@/types/api/study'
import axiosInstance from '../base'
import { EmptyResponse } from '@/types/base'

export const postStudy = async (quizbookId: string, body: PostStudyBody) => {
    const res = await axiosInstance.post<EmptyResponse>(`/v1/study`, {
        quizbookId,
        ...body,
    })

    return res.data
}
