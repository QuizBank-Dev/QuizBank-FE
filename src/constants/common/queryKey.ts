import { QuizbookListParams } from '@/types/api/quizbook'

export const QueryKey = {
    user: {
        DEFAULT: ['user'],
        other: (id: string) => ['user', id],
    },
    quizbook: {
        DEFAULT: (params: QuizbookListParams) => ['quizbook', params],
        author: (authorId: string) => ['quizbook', 'author', authorId],
    },
    studyLog: {
        yearly: (year: number, userId?: string) => [
            'study-log',
            'yearly',
            userId || 'me',
            year,
        ],
        weekly: (offset: number, userId?: string) => [
            'study-log',
            'weekly',
            userId || 'me',
            offset,
        ],
    },
} as const
