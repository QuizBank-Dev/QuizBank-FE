import { GcTime } from '@/constants/common/gcTime'
import { getGroupQuizbookList } from '@/lib/api/group-quizbook'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'

/**
 * 그룹 선정 문제집 리스트를 조회하는 커스텀 훅
 */
export const useGroupQuizbookListQuery = (
    groupId: string,
    defaultStandard: string,
    defaultStatus: string = 'in-progress',
    defaultSort: string = 'increase',
    limit: number = 5,
) => {
    const [standard, setStandard] = useState(defaultStandard)
    const [status, setStatus] = useState(defaultStatus)
    const [sort, setSort] = useState(defaultSort)

    const groupQuizbookListQuery = useInfiniteQuery({
        queryKey: ['group-quizbook-list', groupId, status, sort],
        queryFn: ({ pageParam }) =>
            getGroupQuizbookList(
                groupId,
                standard,
                limit,
                status,
                sort,
                pageParam ?? undefined,
            ),
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        initialPageParam: '',
        staleTime: 0,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })

    return {
        groupQuizbookListQuery,
        standard,
        setStandard,
        status,
        setStatus,
        sort,
        setSort,
    }
}
