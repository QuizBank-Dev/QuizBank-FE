import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getQuizbookStates } from '@/lib/api/quizbook'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useQuizbookStates = (quizbookId: string) =>
    useSuspenseQuery({
        queryKey: QueryKey.quizbook.STATES(quizbookId),
        queryFn: () => getQuizbookStates(quizbookId),
        staleTime: StaleTime.HALF,
        gcTime: GcTime.HOUR,
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
    })
