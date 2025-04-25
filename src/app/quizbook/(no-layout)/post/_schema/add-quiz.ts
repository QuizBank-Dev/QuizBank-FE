import { QUIZ_TYPE } from '@/constants/quiz'
import * as z from 'zod'

const baseSchema = z.object({
    type: z.enum(
        [QUIZ_TYPE.OX, QUIZ_TYPE.MULTIPLE, QUIZ_TYPE.SHORT, QUIZ_TYPE.LONG],
        {
            errorMap: () => ({ message: '유형을 선택해주세요.' }),
        },
    ),
    question: z.string().min(1, '질문을 입력해주세요.'),
})

const oxSchema = baseSchema.extend({
    type: z.literal(QUIZ_TYPE.OX),
    answer: z.enum(['O', 'X'], {
        errorMap: () => ({ message: '정답을 선택해주세요.' }),
    }),
})

const multipleSchema = baseSchema.extend({
    type: z.literal(QUIZ_TYPE.MULTIPLE),
    optionList: z
        .array(z.string().min(1, '빈 선택지는 허용되지 않습니다.'))
        .length(4, '4개의 선택지를 입력해주세요.')
        .refine((list) => new Set(list).size === list.length, {
            message: '선택지는 중복될 수 없습니다.',
        }),
    answer: z.string().min(1, '정답을 선택해주세요.'),
})

const shortSchema = baseSchema.extend({
    type: z.literal(QUIZ_TYPE.SHORT),
    answer: z.string().min(1, '정답을 입력해주세요.'),
})

const longSchema = baseSchema.extend({
    type: z.literal(QUIZ_TYPE.LONG),
    answer: z.string().min(1, '답안을 입력해주세요.'),
})

export const addQuizSchema = z.discriminatedUnion('type', [
    oxSchema,
    multipleSchema,
    shortSchema,
    longSchema,
])

export type AddQuizFormValues = z.infer<typeof addQuizSchema>
