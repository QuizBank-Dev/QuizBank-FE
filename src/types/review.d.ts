export interface ReviewCard {
    _id: string
    score: number
    content: string
    quizbook: string
    author: Author | string
    createdAt: string
    updatedAt: string
}

export interface Author {
    _id: string
    nickname: string
    profileImg: string
}

export interface ReviewList {
    data: ReviewCard[]
    nextCursor: { _id: string } | null
    leftCount: number
}

export interface EditReview {
    score: number
    content: string
}

export interface CreateReview extends EditReview {
    quizbookId: string
}
