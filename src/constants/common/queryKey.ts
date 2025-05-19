import { QuizbookListParams } from '@/types/api/quizbook'

export const QueryKey = {
    user: {
        DEFAULT: ['user'],
    },
    quizbook: {
        DEFAULT: (params: QuizbookListParams) => ['quizbook', params],
        STATES: 'quizbook-states',
        META: 'quizbook-meta',
        USERFLAGS: 'quizbook-user-flags',
    },
    comment: {
        LIST: 'comment-list',
        RECOMMENT_LIST: 'recomment-list',
    },
    study: {
        SOLVED_ANSWER: 'solved-answer',
    },
} as const
