import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { getServerToken } from '@/utils/getServerToken'
import { QueryKey } from '@/constants/common/queryKey'
import { getQuizbookList } from '@/lib/api/quizbook'
import { QuizbookListParams } from '@/types/api/quizbook'

interface Props {
    children: React.ReactNode
    params: QuizbookListParams
}

export const QuizbookListPreFetcher = async ({ children, params }: Props) => {
    const queryClient = getQueryClient()
    const token = await getServerToken()

    await queryClient.prefetchInfiniteQuery({
        queryKey: [
            ...QueryKey.quizbook.DEFAULT({
                sort: 'latest',
                limit: 10,
                ...params,
            }),
        ],
        queryFn: () =>
            getQuizbookList(
                {
                    sort: 'latest',
                    limit: 10,
                    ...params,
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
