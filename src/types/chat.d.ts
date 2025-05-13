export interface ChatMessageType {
    _id: string
    content: string
    sender: string
    createdAt: string
}

export interface GetChatResponse {
    chats: ChatMessageType[]
    nextCursor: string | null
}
