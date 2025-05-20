import { GcTime } from '@/constants/common/gcTime'
import { getReviewList } from '@/lib/api/review'
import { useInfiniteQuery } from '@tanstack/react-query'

/**
 *  문제집 리뷰 리스트를 조회하는 query
 */
export const useReviewListQuery = (quizbookId: string, limit: number = 5) => {
    return useInfiniteQuery({
        queryKey: ['quizbook-reviews', quizbookId],
        queryFn: ({ pageParam }) => getReviewList(quizbookId, limit, pageParam),
        getNextPageParam: (lastPage) =>
            lastPage.nextCursor ? JSON.stringify(lastPage.nextCursor) : null,
        initialPageParam: '',
        staleTime: 0,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })
}
