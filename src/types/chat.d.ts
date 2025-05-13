export interface ChatMessageType {
    data: {
        _id: string
        content: string
        author: {
            _id: string
            nickname: string
            profileImg: string
        }
        createdAt: string
    }
}

export interface GetChatResponse {
    chats: ChatMessage[]
    nextCursor: string
}
