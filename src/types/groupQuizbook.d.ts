import { Quiz } from './quiz'
import { Quizbook } from './quizbook'
import { Author } from './review'

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

export interface EditEndDate {
    endDate: string
}

export interface QuizGroupMemberScore {
    memberList: Author[]
    scoreList: { score: number; owner: Author }[]
}
