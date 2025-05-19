import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getYearlyLog } from '@/lib/api/study-log'

export const useYearlyLogQuery = (targetId?: string) => {
    const [offset, setOffset] = useState(0)
    const { data, ...query } = useQuery({
        queryKey: QueryKey.studyLog.yearly(offset, targetId),
        queryFn: () =>
            getYearlyLog({
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
