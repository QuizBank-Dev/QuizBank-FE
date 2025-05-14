import axiosInstance from '../base'

/**
 * 채팅 읽은 시간 갱신 요청하는 함수
 * @param chatRoomId 채팅방의 ID
 */
export const patchReadStatus = async (chatRoomId: string) => {
    await axiosInstance.patch(`/v1/chat/${chatRoomId}/read`)
}
