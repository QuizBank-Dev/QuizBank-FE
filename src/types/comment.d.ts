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

export interface MyComment {
    _id: string // commentId
    quiz: string // quizId
    content: string
    author: string
    createdAt: string
    updatedAt: string
}
