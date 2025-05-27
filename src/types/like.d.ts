import { Quiz } from './quiz'

/**
 * 다시 볼 문제 타입
 */
export interface QuizLike extends Quiz {
    isLiked: boolean
}
