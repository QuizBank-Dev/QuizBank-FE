import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, LoopAnimation } from '@/components'
import { useCurrentUser } from '@/hooks/queries/user'
import { EditProfileFormData, editProfileSchema } from '@/types/schemas/user'
import { getDirtyValues } from '@/utils/form'
import EditProfileImage from './EditProfileImage'

interface Props {
    onCancelEditMode: () => void
}

export default function Editor({ onCancelEditMode }: Props) {
    const { data: user } = useCurrentUser()
    const [isLoading, setIsLoading] = useState(false)
    const methods = useForm<EditProfileFormData>({
        resolver: zodResolver(editProfileSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async (data: EditProfileFormData) => {
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
            onCancelEditMode()
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
