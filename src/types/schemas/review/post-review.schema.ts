import * as z from 'zod'

export const reviewSchema = z.object({
    content: z
        .string()
        .min(1, { message: '리뷰 내용은 꼭 입력해주세요' })
        .max(50, { message: '리뷰는 50자 이하로 해주세요' }),
})

export type ReviewFormData = z.infer<typeof reviewSchema>
