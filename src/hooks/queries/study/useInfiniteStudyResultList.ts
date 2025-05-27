import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getSutdyResultList } from '@/lib/api/study'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteStudyResultList = () =>
    useInfiniteQuery({
        queryKey: QueryKey.study.RESULT_LIST,
        queryFn: ({ pageParam }) =>
            getSutdyResultList({
                cursor: pageParam ?? undefined,
            }),
        getNextPageParam: (nextPage) =>
            nextPage.nextCursor
                ? JSON.stringify(nextPage.nextCursor)
                : undefined,
        staleTime: StaleTime.HALF,
        gcTime: GcTime.HALF,
        retry: 1,
        meta: {
            ignoreGlobalError: true,
        },
        initialPageParam: undefined as string | undefined,
    })
