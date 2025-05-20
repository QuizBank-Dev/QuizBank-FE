import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getAuthorQuizbookList } from '@/lib/api/quizbook'

export const useAuthorQuizbookListQuery = (authorId: string) => {
    const { data, ...query } = useInfiniteQuery({
        queryKey: QueryKey.quizbook.author(authorId),
        queryFn: ({ pageParam }) =>
            getAuthorQuizbookList(authorId, {
                limit: 10,
                cursor: pageParam,
            }),
        getNextPageParam: (lastPage) =>
            lastPage.result.nextCursor
                ? JSON.stringify(lastPage.result.nextCursor)
                : null,
        initialPageParam: '',
        select: (data) => ({
            totalCount: data.pages[0].result.totalCount,
            quizbookList: data.pages.flatMap((item) => item.result.data),
        }),
    })

    return {
        data: {
            totalCount: data?.totalCount || 0,
            quizbookList: data?.quizbookList || [],
        },
        ...query,
    }
}
