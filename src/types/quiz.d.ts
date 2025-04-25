import { QUIZ_TYPE } from '@/constants/quiz'

// Quiz > type 필드 타입
export type QuizType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]

// Quiz 타입
export interface Quiz {
    type: QuizType
    question: string
    answer: string
    optionList?: string[]
}
