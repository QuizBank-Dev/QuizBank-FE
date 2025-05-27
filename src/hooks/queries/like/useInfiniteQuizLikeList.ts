import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getQuizLikeList } from '@/lib/api/like/getQuizLikeList'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteQuizLikeList = () =>
    useInfiniteQuery({
        queryKey: QueryKey.like.QUIZ_LIST,
        queryFn: ({ pageParam }) =>
            getQuizLikeList({
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
