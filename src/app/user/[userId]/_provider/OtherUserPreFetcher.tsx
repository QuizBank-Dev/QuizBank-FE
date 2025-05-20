import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { QueryKey } from '@/constants/common/queryKey'
import { OtherUser } from '@/types/user'

interface Props {
    children: React.ReactNode
    userId: string
    defaultData: OtherUser
}

export default async function OtherUserPreFetcher({
    children,
    userId,
    defaultData,
}: Props) {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: QueryKey.user.other(userId),
        queryFn: () => defaultData,
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
