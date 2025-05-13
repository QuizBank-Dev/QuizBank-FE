import axiosInstance from '../base'
import { GetChatResponse } from '@/types/chat'

/**
 * 채팅 내역을 조회 요청하는 함수
 * @param chatRoomId 채팅방의 ID
 * @param cursor 기준이 되는 시간
 * @param take 가져올 개수(기본 10)
 */
export const getChat = async (
    chatRoomId: string,
    cursor?: string,
    take: number = 10,
) => {
    const params = new URLSearchParams()
    if (cursor) params.append('cursor', cursor)
    params.append('take', take.toString())

    const res = await axiosInstance.get<{ result: GetChatResponse }>(
        `/v1/chat/${chatRoomId}?${params.toString()}`,
    )
    return res.data.result
}
