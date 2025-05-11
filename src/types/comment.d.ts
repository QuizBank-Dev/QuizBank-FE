export interface Comment {
    _id: string
    content: string
    quiz: string
    author: {
        _id: string
        nickname: string
        profileImg: string
    }
    createdAt: string
    updatedAt: string
    parent?: string
    recommentCount?: number
}
