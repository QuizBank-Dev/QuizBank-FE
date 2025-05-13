import { Response } from '@/types/base'
import axiosInstance from '../base'
import { QuizbookUserFlags } from '@/types/quizbook'

export const getQuizbookUserFlags = async (quizbookId: string) => {
    const res = await axiosInstance.get<Response<QuizbookUserFlags>>(
        `/quizbook/${quizbookId}/user-flags`,
    )

    return res.data.result
}
