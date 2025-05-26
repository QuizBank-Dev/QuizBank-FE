import * as z from 'zod'

export const forgotPasswordSchema = z.object({
    email: z.string().email('이메일 형식으로 입력해주세요.'),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
