import { GcTime } from '@/constants/common/gcTime'
import { getGroupQuizbook } from '@/lib/api/group-quizbook'
import { useQuery } from '@tanstack/react-query'

/**
 * 그룹 선정 문제집 정보를 조회하는 query
 */
export const useGroupQuizbookQuery = (groupId: string, quizbookId: string) => {
    return useQuery({
        queryKey: ['group-quizbook', groupId, quizbookId],
        queryFn: () => getGroupQuizbook(groupId, quizbookId),
        staleTime: 0,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })
}
