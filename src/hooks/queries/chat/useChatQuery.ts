import { GcTime } from '@/constants/common/gcTime'
import { StaleTime } from '@/constants/common/staleTime'
import { getChat } from '@/lib/api/chat'
import { GetChatResponse } from '@/types/chat'
import { useInfiniteQuery } from '@tanstack/react-query'

/**
 * 채팅 내역을 조회하는 query
 */
export const useChatQuery = (chatRoomId: string, take: number = 10) => {
    return useInfiniteQuery<
        GetChatResponse,
        Error,
        GetChatResponse,
        [string, string],
        string | undefined
    >({
        queryKey: ['chat', chatRoomId],
        queryFn: ({ queryKey, pageParam }) =>
            getChat(queryKey[1], pageParam, take),
        getNextPageParam: () => null,
        getPreviousPageParam: (firstPage) => firstPage.nextCursor,
        initialPageParam: undefined,
        staleTime: StaleTime.DEFAULT,
        gcTime: GcTime.DEFAULT,
        retry: 0,
    })
}
