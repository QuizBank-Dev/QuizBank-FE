import { QuizType } from './quiz'
import { Quizbook } from './quizbook'
import { Author } from './user'

/**
 * 다른 사용자 작성 답안
 */
export interface SolvedAnswer {
    answer: string
    score: number
    owner: Author
}

/**
 * 문제별 결과 타입
 */
export interface QuizResult {
    _id: string
    question: string
    type: QuizType
    score: number
    isLiked: boolean
}

/**
 * 학습 결과 타입
 */
export interface StudyResult {
    quizList: QuizResult[]
    createdAt: string
    updatedAt: string
}

/**
 * 학습 결과 리스트 아이템 타입
 */
export interface StudyResultItem {
    quizbook: Quizbook<string>
    score: number
    updatedAt: string
}
