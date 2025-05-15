import { GcTime } from '@/constants/common/gcTime'
import { getGroupList } from '@/lib/api/group'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'

/**
 * 그룹 정보 리스트를 조회하는 커스텀 훅
 */
export const useGroupListQuery = (
    defaultTheme: string = 'total',
    limit: number = 10,
) => {
    const [name, setName] = useState('')
    const [theme, setTheme] = useState(defaultTheme)

    const groupListQuery = useInfiniteQuery({
        queryKey: ['group', 'list', theme, name],
        queryFn: ({ pageParam }) =>
            getGroupList(theme, pageParam, limit, name ?? undefined),
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        initialPageParam: '',
        staleTime: 0,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })

    return { groupListQuery, setName, setTheme }
}
