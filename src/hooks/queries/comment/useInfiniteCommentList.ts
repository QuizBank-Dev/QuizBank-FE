import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getCommentList } from '@/lib/api/comment'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteCommentList = (quizId: string) =>
    useInfiniteQuery({
        queryKey: [QueryKey.comment.LIST, quizId],
        queryFn: ({ pageParam }) =>
            getCommentList(quizId, {
                cursor: pageParam ?? undefined,
            }),
        getNextPageParam: (nextPage) =>
            nextPage.nextCursor
                ? JSON.stringify(nextPage.nextCursor)
                : undefined,
        staleTime: StaleTime.MINUTE * 5, // (5분)
        gcTime: GcTime.MINUTE * 5, // (5분)
        retry: 1,
        meta: {
            ignoreGlobalError: true,
        },
        initialPageParam: undefined as string | undefined,
    })
