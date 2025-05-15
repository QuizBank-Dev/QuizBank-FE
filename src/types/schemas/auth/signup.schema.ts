import * as z from 'zod'

export const signupSchema = z
    .object({
        email: z.string().email('이메일 형식으로 입력해주세요.'),
        code: z.string(),
        password: z
            .string()
            .nonempty('필수 입력되어야하는 항목입니다.')
            .regex(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()\-_=+\\|/?,.<>;:'"[\]{}]+$/,
                '비밀번호는 8자리 이상, 영문과 숫자를 1가지 이상 조합해주세요.',
            )
            .min(
                8,
                '비밀번호는 8자리 이상, 영문과 숫자를 1가지 이상 조합해주세요.',
            ),
        confirmPassword: z
            .string()
            .nonempty('필수로 입력되어야하는 항목입니다.'),
        nickname: z.string().nonempty('필수로 입력되어야하는 항목입니다.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: '비밀번호가 일치하지 않습니다.',
        path: ['confirmPassword'],
    })

export type SignupFormData = z.infer<typeof signupSchema>
