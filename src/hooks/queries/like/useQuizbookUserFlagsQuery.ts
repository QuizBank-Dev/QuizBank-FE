import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getQuizbookUserFlags } from '@/lib/api/quizbook'
import { useQuery } from '@tanstack/react-query'

/**
 * 특정 Quizbook의 유저 플래그 조회하는 query
 */
export const useQuizbookUserFlagsQuery = (quizbookId: string) => {
    return useQuery({
        queryKey: ['quizbook-flags', quizbookId],
        queryFn: () => getQuizbookUserFlags(quizbookId),
        staleTime: StaleTime.DEFAULT,
        gcTime: GcTime.DEFAULT,
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
    })
}
