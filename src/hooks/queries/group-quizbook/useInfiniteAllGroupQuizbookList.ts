import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getAllGroupQuizbookList } from '@/lib/api/group-quizbook'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteAllGroupQuizbookList = () =>
    useInfiniteQuery({
        queryKey: QueryKey.quizbook.GROUP,
        queryFn: ({ pageParam }) =>
            getAllGroupQuizbookList({
                cursor: pageParam ?? undefined,
            }),
        getNextPageParam: (nextPage) =>
            nextPage.nextCursor
                ? JSON.stringify(nextPage.nextCursor)
                : undefined,
        staleTime: StaleTime.MINUTE * 10,
        gcTime: GcTime.MINUTE * 10,
        retry: 1,
        meta: {
            ignoreGlobalError: true,
        },
        initialPageParam: undefined as string | undefined,
    })
