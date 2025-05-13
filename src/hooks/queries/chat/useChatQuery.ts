import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getChat } from '@/lib/api/chat'
import { useInfiniteQuery } from '@tanstack/react-query'

/**
 * 채팅 내역을 조회하는 query
 */
export const useChatQuery = (
    chatRoomId: string | undefined,
    take: number = 10,
) => {
    return useInfiniteQuery({
        queryKey: ['chat', chatRoomId ?? ''],
        queryFn: ({ queryKey, pageParam }) =>
            getChat(queryKey[1], pageParam ?? undefined, take),
        getNextPageParam: () => null,
        getPreviousPageParam: (firstPage) => firstPage.nextCursor,
        initialPageParam: '',
        staleTime: StaleTime.DEFAULT,
        gcTime: GcTime.DEFAULT,
        retry: 0,
        enabled: !!chatRoomId,
    })
}
