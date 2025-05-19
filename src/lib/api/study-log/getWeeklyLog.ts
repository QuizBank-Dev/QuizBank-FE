import axiosInstance from '@/lib/api/base'
import { Response } from '@/types/base'
import { StudyLog } from '@/types/study-log'
import { WeeklyLogParams } from '@/types/api/study-log'

export const getWeeklyLog = async (params: WeeklyLogParams) => {
    const res = await axiosInstance.get<Response<StudyLog[]>>(
        'v1/study-log/weekly',
        {
            params,
        },
    )
    return res.data
}
