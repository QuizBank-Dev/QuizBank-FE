import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getCurrentUser } from '@/lib/api/user'

type QueryType = Awaited<ReturnType<typeof getCurrentUser>>

/**
 * 현재 로그인한 유저를 가져오는 query
 */
export const useCurrentUser = () => {
    return useQuery<QueryType>({
        queryKey: QueryKey.user.DEFAULT,
        queryFn: () => getCurrentUser(),
        staleTime: 1000 * 60 * 60, // 1시간
        gcTime: 1000 * 60 * 60 * 10, // 10시간
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
    })
}
