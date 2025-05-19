import { QuizbookListParams } from '@/types/api/quizbook'

export const QueryKey = {
    user: {
        DEFAULT: ['user'],
    },
    quizbook: {
        DEFAULT: (params: QuizbookListParams) => ['quizbook', params],
    },
} as const
