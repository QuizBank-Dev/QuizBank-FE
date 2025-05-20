import { QUIZBOOK_CATEGORY } from '@/constants/quizbook'
import { Author } from '@/types/user'
import { Quiz } from './quiz'

export type QuizbookCategoryType =
    (typeof QUIZBOOK_CATEGORY)[keyof typeof QUIZBOOK_CATEGORY]

/**
 * 문제집 전체 타입
 */
export interface Quizbook<T = unknown> {
    _id: string
    title: string
    description: string
    category: QuizbookCategoryType
    solvedCount: number
    solvedScore: number
    totalScore: number
    reviewCount: number
    reviewScore: number
    reviewRating: number
    quizList: T[]
    author: Author
    isLiked: boolean
    isStudied: boolean
    createdAt: string
    updatedAt: string
}

/**
 * 문제집의 메타 정보 전용 타입
 */
export interface QuizbookMeta {
    _id: string
    title: string
    description: string
    category: QuizbookCategoryType
    quizList: Quiz[]
    totalScore: number
    author: Author
    createdAt: string
}

/**
 * 문제집의 유저 플래그 전용 타입
 */
export interface QuizbookUserFlags {
    _id: string
    isLiked: boolean
    isStudied: boolean
}

/**
 * 문제집의 통계 정보 전용 타입
 */
export interface QuizbookStates {
    _id: string
    solvedCount: number
    solvedScore: number
    totalScore: number
    reviewCount: number
    reviewScore: number
    reviewRating: number
    createdAt: string
    updatedAt: string
}
