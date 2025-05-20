import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getWeeklyLog } from '@/lib/api/study-log'
import { useState } from 'react'

export const useWeeklyLogQuery = (targetId?: string) => {
    const [offset, setOffset] = useState(0)
    const { data, ...query } = useQuery({
        queryKey: QueryKey.studyLog.weekly(offset, targetId),
        queryFn: () =>
            getWeeklyLog({
                userId: targetId,
                offset,
            }),
        select: (data) => data.result,
    })

    return {
        data: data || [],
        offset,
        setOffset,
        ...query,
    }
}
