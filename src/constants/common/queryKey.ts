import { QuizbookListParams } from '@/types/api/quizbook'

export const QueryKey = {
    user: {
        DEFAULT: ['user'],
    },
    quizbook: {
        DEFAULT: (params: QuizbookListParams) => ['quizbook', params],
        STATES: (quizbookId: string) => ['quizbook-states', quizbookId],
        USERFLAGS: (quizbookId: string) => ['quizbook-user-flags', quizbookId],
    },
    comment: {
        LIST: (quizId: string) => ['comment-list', quizId],
        RECOMMENT_LIST: (commentId: string) => ['recomment-list', commentId],
    },
    study: {
        SOLVED_ANSWER: (quizId: string) => ['solved-answer', quizId],
    },
} as const
