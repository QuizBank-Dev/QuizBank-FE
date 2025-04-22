import { cookies } from 'next/headers'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { QueryKey } from '@/constants/common/queryKey'
import { getCurrentUser } from '@/lib/api/user'

interface Props {
    children: React.ReactNode
}

export const UserPrefetcher = async ({ children }: Props) => {
    const queryClient = getQueryClient()
    const cookieStore = await cookies()
    const [accessToken, refreshToken] = [
        cookieStore.get('access_token')?.value,
        cookieStore.get('refresh_token')?.value,
    ]

    // 서버에서 쿼리 호출
    await queryClient.prefetchQuery({
        queryKey: QueryKey.user.DEFAULT,
        queryFn: () =>
            getCurrentUser(
                `access_token=${accessToken}; refresh_token=${refreshToken}`,
            ),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
