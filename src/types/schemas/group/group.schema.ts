import { z } from 'zod'

export const groupSchema = z.object({
    name: z
        .string()
        .min(3, { message: '그룹 이름은 3자 이상으로 해주세요' })
        .max(20, { message: '그룹 이름은 20자 이하로 해주세요' }),
    description: z
        .string()
        .min(1, { message: '그룹 소개는 꼭 입력해주세요' })
        .max(50, { message: '그룹 소개는 50자 이하로 해주세요' }),
})

export type GroupFormData = z.infer<typeof groupSchema>
