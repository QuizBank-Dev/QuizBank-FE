import { QUESTION_TYPE } from '@/constants/quiz'

// Quiz > question 필드 타입
export type QuestionType = (typeof QUESTION_TYPE)[keyof typeof QUESTION_TYPE]
