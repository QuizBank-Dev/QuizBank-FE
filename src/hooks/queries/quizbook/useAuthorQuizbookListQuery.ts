import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getAuthorQuizbookList } from '@/lib/api/quizbook'

/**
 * 특정 사용자가 생성한 문제집 리스트를 가져오는 query
 * @param authorId 특정 사용자의 아이디 (내가 만든 문제집의 경우 `me`)
 */
export const useAuthorQuizbookListQuery = (authorId: 'me' | string) => {
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
