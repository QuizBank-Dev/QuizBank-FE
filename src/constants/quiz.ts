import { QuizType } from '@/types/quiz'

// 문제 유형
export const QUIZ_TYPE = {
    OX: 'ox',
    MULTIPLE: '객관식',
    SHORT: '주관식',
    LONG: '서술형',
} as const

// 문제 유형별 경험치
export const TypeToXp: Record<QuizType, number> = {
    ox: 5,
    객관식: 10,
    주관식: 15,
    서술형: 20,
}

// 문제 유형별 컬러
export const TypeToColor: Record<QuizType, string> = {
    ox: 'text-[#4CAF50]',
    객관식: 'text-[#2196F3]',
    주관식: 'text-[#8A43EF]',
    서술형: 'text-[#4D3089]',
}
