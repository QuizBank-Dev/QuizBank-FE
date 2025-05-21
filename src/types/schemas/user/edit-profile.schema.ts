import * as z from 'zod'

export const editProfileSchema = z.object({
    profileImg: z
        .custom<File | null>()
        .refine(
            (file) => file instanceof File || file === null,
            '유효한 파일을 선택해주세요.',
        ),
    nickname: z.string().nonempty('닉네임은 필수로 입력되어야합니다.'),
    introduce: z.string(),
})

export type EditProfileFormData = z.infer<typeof editProfileSchema>
