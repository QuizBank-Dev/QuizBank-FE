import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { QuizbookListParams } from '@/types/api/quizbook'
import { getQuizbookList } from '@/lib/api/quizbook'

export const useQuizbookListQuery = ({
    limit = 10,
    sort = 'latest',
    category,
    keyword,
}: QuizbookListParams) => {
    return useSuspenseInfiniteQuery({
        queryKey: QueryKey.quizbook.DEFAULT({ limit, sort, category, keyword }),
        queryFn: ({ pageParam }) =>
            getQuizbookList({
                limit,
                cursor: pageParam,
                sort,
                category,
                keyword,
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
}
