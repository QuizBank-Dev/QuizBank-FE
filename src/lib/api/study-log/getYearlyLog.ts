import axiosInstance from '@/lib/api/base'
import { Response } from '@/types/base'
import { StudyLog } from '@/types/study-log'
import { YearlyLogParams } from '@/types/api/study-log'

export const getYearlyLog = async (params: YearlyLogParams) => {
    const res = await axiosInstance.get<Response<StudyLog[]>>(
        'v1/study-log/yearly',
        { params },
    )
    return res.data
}
