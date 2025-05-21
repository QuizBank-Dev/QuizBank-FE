import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getGroupMemberAnswer } from '@/lib/api/group-quizbook'
import { Quiz } from '@/types/quiz'
import { useQueries } from '@tanstack/react-query'

/**
 * 그룹 문제집에 속한 퀴즈 목록에 대해,
 * 각 퀴즈별로 그룹원들의 답안 정보를 병렬로 조회하는 커스텀 훅입니다.
 */
export const useGroupMemberAnswerQuery = (
    groupId: string,
    quizList: Quiz[],
) => {
    return useQueries({
        queries: quizList.map((data) => ({
            queryKey: ['group-quizbook', groupId, data._id, 'member-answer'],
            queryFn: () => getGroupMemberAnswer(data._id, groupId),
            staleTime: StaleTime.MINUTE,
            gcTime: GcTime.DEFAULT,
            retry: 0,
        })),
    })
}
