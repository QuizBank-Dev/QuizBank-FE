import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { getServerToken } from '@/utils/getServerToken'
import { QueryKey } from '@/constants/common/queryKey'
import { getQuizbookList } from '@/lib/api/quizbook'

interface Props {
    children: React.ReactNode
}

export const QuizbookListPreFetcher = async ({ children }: Props) => {
    const queryClient = getQueryClient()
    const token = await getServerToken()

    await queryClient.prefetchInfiniteQuery({
        queryKey: QueryKey.quizbook.DEFAULT({
            sort: 'latest',
            limit: 10,
        }),
        queryFn: () =>
            getQuizbookList(
                {
                    sort: 'latest',
                    limit: 10,
                },
                token,
            ),
        getNextPageParam: (lastPage: { result: { nextCursor: unknown } }) =>
            lastPage.result.nextCursor
                ? JSON.stringify(lastPage.result.nextCursor)
                : null,
        initialPageParam: '',
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
