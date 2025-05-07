import clsx from 'clsx'
import EditProfileImage from './EditProfileImage'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, LoopAnimation } from '@/components'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface Props {
    onCancelEditMode: () => void
}

const user = {
    _id: '1',
    nickname: 'example',
    profileImg: '',
    introduce: '안녕하세요',
    category: ['자료구조'],
    experience: 0,
    isOAuthAccount: false,
}

const schema = z.object({
    profileImg: z
        .custom<File | null>()
        .refine(
            (file) => file instanceof File || file === null,
            '유효한 파일을 선택해주세요.',
        ),
    nickname: z.string().nonempty('닉네임은 필수로 입력되어야합니다.'),
    introduce: z.string(),
})
type FormData = z.infer<typeof schema>

export default function Editor({ onCancelEditMode }: Props) {
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    })

    /**
     * formState에서 변경된 값만 추출하는 함수
     * @param dirtyFields formState.dirtyFields
     * @param values onSubmit의 data
     */
    const getDirtyValues = <T extends Record<string, unknown>>(
        dirtyFields: Partial<Record<keyof T, boolean>>,
        values: T,
    ): Partial<T> => {
        return (Object.keys(dirtyFields) as (keyof T)[]).reduce((prev, key) => {
            if (!dirtyFields[key] || values[key] === undefined) return prev
            return {
                ...prev,
                [key]: values[key],
            }
        }, {})
    }

    const handleFormSubmit = async (data: FormData) => {
        const dirtyValues = getDirtyValues(methods.formState.dirtyFields, data)

        setIsLoading(true)
        // TODO 사용자 정보 수정 API 호출
        const result = await new Promise<string>((resolve) =>
            setTimeout(() => {
                console.log(dirtyValues)
                resolve('OK')
            }, 2000),
        )
        setIsLoading(false)

        if (result === 'OK') {
            // 가입 완료 처리
            toast('저장되었습니다.')
            // onCancelEditMode()
        } else {
            // 가입 실패 처리
            toast('ERROR')
        }
    }

    useEffect(() => {
        if (user) {
            // user 정보가 제대로 나왔을 때 form 초기화
            methods.reset({
                profileImg: null,
                nickname: user.nickname,
                introduce: user.introduce,
            })
        }
    }, [methods, user])

    if (!user) {
        return null
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point"
                onSubmit={methods.handleSubmit(handleFormSubmit, console.error)}
            >
                <EditProfileImage
                    size={128}
                    profileImg={user.profileImg}
                    onChange={(file) =>
                        methods.setValue('profileImg', file, {
                            shouldDirty: true,
                        })
                    }
                    disabled={isLoading}
                />
                <CustomInput
                    id="nickname"
                    name="nickname"
                    placeholder="닉네임을 입력해주세요"
                    style="solid"
                    disabled={isLoading}
                />
                <CustomInput
                    id="introduce"
                    name="introduce"
                    placeholder="간단한 소개를 작성해주세요"
                    style="solid"
                    disabled={isLoading}
                />
                <div className="flex w-full gap-2">
                    <button
                        type="button"
                        className="btn-outline btn-mobile-lg flex-1 md:btn-pc-lg"
                        onClick={onCancelEditMode}
                        disabled={isLoading}
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        className={clsx(
                            'btn-solid btn-mobile-lg flex-1 md:btn-pc-lg',
                            isLoading && 'btn-loading',
                        )}
                        disabled={isLoading}
                    >
                        {isLoading && <LoopAnimation />}
                        {isLoading ? 'Loading...' : '저장'}
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}
