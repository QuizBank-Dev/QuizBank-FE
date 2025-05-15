export interface ChatMessageType {
    _id: string
    content: string
    sender: string
    createdAt: string
    chatRoom?: string
}

export interface GetChatResponse {
    chats: ChatMessageType[]
    nextCursor: string | null
}

export interface ChatCache {
    pages: GetChatResponse[]
    pageParams: (string | undefined)[]
}
