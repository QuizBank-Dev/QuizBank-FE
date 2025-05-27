import { GcTime } from '@/constants/common/gcTime'
import { QueryKey } from '@/constants/common/queryKey'
import { StaleTime } from '@/constants/common/staleTime'
import { getSolvedAnswerList } from '@/lib/api/study'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteSolvedAnswerList = (quizId: string) =>
    useInfiniteQuery({
        queryKey: QueryKey.study.SOLVED_ANSWER(quizId),
        queryFn: ({ pageParam }) =>
            getSolvedAnswerList(quizId, {
                cursor: pageParam ?? undefined,
            }),
        enabled: !!quizId,
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
