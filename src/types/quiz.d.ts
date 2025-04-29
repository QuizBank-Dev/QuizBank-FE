import { QUIZ_TYPE } from '@/constants/quiz'

// Quiz > type 필드 타입
export type QuizType = (typeof QUIZ_TYPE)[keyof typeof QUIZ_TYPE]

// Quiz 타입
export type Quiz =
    | { type: typeof QUIZ_TYPE.OX; question: string; answer: 'O' | 'X' }
    | {
          type: typeof QUIZ_TYPE.MULTIPLE
          question: string
          answer: string
          optionList: string[]
      }
    | { type: typeof QUIZ_TYPE.SHORT; question: string; answer: string }
    | { type: typeof QUIZ_TYPE.LONG; question: string; answer: string }
