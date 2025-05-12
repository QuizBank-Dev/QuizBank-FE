import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getGroup } from '@/lib/api/group'
import { useQuery } from '@tanstack/react-query'

/**
 * 그룹 정보를 가져오는 query
 */
export const useGroupQuery = (groupId: string) => {
    return useQuery({
        queryKey: ['group', groupId],
        queryFn: () => getGroup(groupId),
        staleTime: StaleTime.DEFAULT,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })
}
