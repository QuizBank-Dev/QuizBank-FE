export interface ReviewCard {
    _id: string
    score: number
    content: string
    quizbook: string
    author: {
        _id: string
        nickname: string
        profileImg: string
    }
    createdAt: string
    updatedAt: string
}

export interface ReviewList {
    data: ReviewCard[]
    nextCursor: string | null
    leftCount: number
}
