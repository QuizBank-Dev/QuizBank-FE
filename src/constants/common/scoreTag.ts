import { QuestionType } from '@/types/quiz'

export const TypeToXp: Record<QuestionType, number> = {
    ox: 5,
    객관식: 10,
    주관식: 15,
    서술형: 20,
}

export const TypeToColor: Record<QuestionType, string> = {
    ox: 'text-[#4CAF50] fill-[#4CAF50]',
    객관식: 'text-[#2196F3] fill-[#2196F3]',
    주관식: 'text-[#8A43EF] fill-[#8A43EF]',
    서술형: 'text-[#4D3089] fill-[#4D3089]',
}
