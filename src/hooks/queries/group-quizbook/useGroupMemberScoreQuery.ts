import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getGroupMemberScore } from '@/lib/api/group-quizbook'
import { useQuery } from '@tanstack/react-query'

/**
 * 특정 문제집에 대한 그룹원들의 점수들을 조회하는 query
 */
export const useGroupMemberScoreQuery = (
    groupId: string,
    quizbookId: string,
) => {
    return useQuery({
        queryKey: ['group-quizbook', groupId, quizbookId, 'member-score'],
        queryFn: () => getGroupMemberScore(quizbookId, groupId),
        staleTime: StaleTime.MINUTE,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })
}
