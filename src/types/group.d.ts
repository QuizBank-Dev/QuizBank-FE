export interface Group {
    _id: string
    name: string
    description: string
    admin: {
        _id: string
        nickname: string
        profileImg: string
    }
    memberCount: number
    chatRoom?: string
}
