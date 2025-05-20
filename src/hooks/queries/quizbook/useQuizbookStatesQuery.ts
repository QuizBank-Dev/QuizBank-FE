import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getQuizbookStates } from '@/lib/api/quizbook'
import { useQuery } from '@tanstack/react-query'

/**
 * 특정 Quizbook의 통계 정보를 가져오는 query
 */
export const useQuizbookStatesQuery = (quizbookId: string) => {
    return useQuery({
        queryKey: ['quizbook-states', quizbookId],
        queryFn: () => getQuizbookStates(quizbookId),
        staleTime: StaleTime.HALF,
        gcTime: GcTime.HOUR,
        retry: 0,
    })
}
