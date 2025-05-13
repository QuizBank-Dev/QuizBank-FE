import { QUIZ_TYPE } from '@/constants/quiz'

// Quiz > type 필드 타입
export type QuizType = (typeof QUIZ_TYPE)[keyof typeof QUIZ_TYPE]

// Quiz 타입
export interface Quiz {
    _id: string
    type: QuizType
    question: string
    optionList?: string[]
    answer?: string
}
