import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getQuizbookLikeList } from '@/lib/api/like'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteQuizbookLikeList = () =>
    useInfiniteQuery({
        queryKey: QueryKey.like.QUIZBOOK_LIST,
        queryFn: ({ pageParam }) =>
            getQuizbookLikeList({
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
