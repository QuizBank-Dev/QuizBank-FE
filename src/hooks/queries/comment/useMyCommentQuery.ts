import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getMyComment } from '@/lib/api/comment'

export const useMyCommentQuery = () => {
    const { data, ...query } = useInfiniteQuery({
        queryKey: QueryKey.comment.me,
        queryFn: ({ pageParam }) =>
            getMyComment({ limit: 10, cursor: pageParam }),
        getNextPageParam: (lastPage) =>
            lastPage.result.nextCursor
                ? JSON.stringify(lastPage.result.nextCursor)
                : null,
        initialPageParam: '',
        select: (data) => ({
            totalCount: data.pages[0].result.totalCount,
            commentList: data.pages.flatMap((item) => item.result.data),
        }),
    })

    return {
        data: {
            totalCount: data?.totalCount || 0,
            commentList: data?.commentList || [],
        },
        ...query,
    }
}
