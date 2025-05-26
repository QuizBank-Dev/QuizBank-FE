import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getRecommentList } from '@/lib/api/comment/getRecommentList'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteRecommentList = (commentId?: string) =>
    useInfiniteQuery({
        queryKey: commentId
            ? QueryKey.comment.RECOMMENT_LIST(commentId)
            : QueryKey.comment.RECOMMENT_LIST('skip'),
        queryFn: ({ pageParam }) => {
            if (!commentId) {
                return {
                    data: [],
                    nextCursor: null,
                    totalCount: 0,
                }
            }

            return getRecommentList(commentId, {
                cursor: pageParam ?? undefined,
            })
        },
        getNextPageParam: (nextPage) =>
            nextPage.nextCursor
                ? JSON.stringify(nextPage.nextCursor)
                : undefined,
        staleTime: StaleTime.MINUTE * 5, // (5분)
        gcTime: GcTime.MINUTE * 5, // (5분)
        retry: 1,
        enabled: !!commentId,
        meta: {
            ignoreGlobalError: true,
        },
        initialPageParam: undefined as string | undefined,
    })
