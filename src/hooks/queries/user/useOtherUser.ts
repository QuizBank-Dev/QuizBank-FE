import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getOtherUser } from '@/lib/api/user'

export const useOtherUser = (id: string) => {
    return useQuery({
        queryKey: QueryKey.user.other(id),
        queryFn: () => getOtherUser(id),
    })
}
