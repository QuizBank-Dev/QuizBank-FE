import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { QueryKey } from '@/constants/common/queryKey'
import { getCurrentUser } from '@/lib/api/user'
import { getServerToken } from '@/utils/getServerToken'

interface Props {
    children: React.ReactNode
}

export const UserPrefetcher = async ({ children }: Props) => {
    const queryClient = getQueryClient()
    const token = await getServerToken()

    // 서버에서 쿼리 호출
    await queryClient.prefetchQuery({
        queryKey: QueryKey.user.DEFAULT,
        queryFn: () => getCurrentUser(token),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
