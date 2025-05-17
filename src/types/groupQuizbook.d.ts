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
