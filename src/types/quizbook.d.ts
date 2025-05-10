import { QUIZBOOK_CATEGORY } from '@/constants/quizbook'

export type QuizbookCategoryType =
    (typeof QUIZBOOK_CATEGORY)[keyof typeof QUIZBOOK_CATEGORY]

export interface Quizbook<T = unknown> {
    _id: string
    title: string
    description: string
    category: QuizbookCategoryType
    solvedCount: number
    solvedScore: number
    reviewCount: number
    reviewScore: number
    reviewRating: number
    quizList: T[]
    // TODO User 타입으로 분리 필요
    author: Author
    isLiked: boolean
    isStudied: boolean
    createdAt: string
    updatedAt: string
}
