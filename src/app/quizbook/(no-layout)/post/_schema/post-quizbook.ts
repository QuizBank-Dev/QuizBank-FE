import { QUIZBOOK_CATEGORY } from '@/constants/quizbook'
import * as z from 'zod'
import { addQuizSchema } from './add-quiz'

export type PostQuizbookFormValues = z.infer<typeof postQuizbookSchema>

export const postQuizbookSchema = z.object({
    title: z.string().min(1, '제목을 입력해주세요.'),
    category: z.enum(
        [
            QUIZBOOK_CATEGORY.DATA_STRUCTURE,
            QUIZBOOK_CATEGORY.ALGORITHM,
            QUIZBOOK_CATEGORY.DATABASE,
            QUIZBOOK_CATEGORY.NETWORK,
            QUIZBOOK_CATEGORY.WEB,
            QUIZBOOK_CATEGORY.ETC,
        ],
        { errorMap: () => ({ message: '카테고리를 선택해주세요.' }) },
    ),
    quizList: z.array(addQuizSchema).min(1, '퀴즈를 1개 이상 추가해주세요.'),
})
