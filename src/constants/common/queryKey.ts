import { QuizbookListParams } from '@/types/api/quizbook'

export const QueryKey = {
    user: {
        DEFAULT: ['user'],
        other: (id: string) => ['user', id],
    },
    quizbook: {
        DEFAULT: (params: QuizbookListParams) => ['quizbook', params],
        STATES: (quizbookId: string) => ['quizbook-states', quizbookId],
        USERFLAGS: (quizbookId: string) => ['quizbook-flags', quizbookId],
        author: (authorId: string) => ['quizbook', 'author', authorId],
    },
    comment: {
        LIST: (quizId: string) => ['comment-list', quizId],
        RECOMMENT_LIST: (commentId: string) => ['recomment-list', commentId],
    },
    study: {
        SOLVED_ANSWER: (quizId: string) => ['solved-answer', quizId],
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
