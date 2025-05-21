import { Quiz } from './quiz'
import { Quizbook } from './quizbook'

export interface GroupQuizbook {
    group: string
    quizbook: Quizbook<string>
    endedAt: string
}

export interface GroupQuizbookList {
    list: GroupQuizbook[]
    nextCursor: string | null
    leftCount: number
}

export interface GroupQuizbookMeta {
    group: string
    quizbook: Quizbook<Quiz>
    endedAt: string
}
