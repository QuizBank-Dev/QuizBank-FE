import { Author } from './user'

/**
 * 다른 사용자 작성 답안
 */
export interface SolvedAnswer {
    answer: string
    score: number
    owner: Author
}
