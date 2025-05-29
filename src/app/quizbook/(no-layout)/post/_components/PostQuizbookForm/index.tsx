'use client'

import PlusSvg from '@/assets/svgs/plus.svg'

import { usePostQuizbookStore } from '@/store/quizbook'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, CustomSelect, LoopAnimation } from '@/components'
import { QUIZBOOK_CATEGORY } from '@/constants/quizbook'
import AddedQuiz from './AddedQuiz'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/types/base'
import clsx from 'clsx'
import {
    PostQuizbookFormData,
    postQuizbookSchema,
} from '@/types/schemas/quizbook'
import { usePostQuizbook } from '@/hooks/mutations/quizbook'

export default function PostQuizbookForm() {
    const router = useRouter()

    const {
        title,
        description,
        category,
        quizList,
        hydrated,
        setMeta,
        removeQuiz,
        reset: resetStore,
    } = usePostQuizbookStore()

    const methods = useForm<PostQuizbookFormData>({
        resolver: zodResolver(postQuizbookSchema),
        mode: 'onChange',
    })

    const { handleSubmit, setValue, reset, watch, formState } = methods

    const { mutate, isPending } = usePostQuizbook()

    const onSubmit = async (data: PostQuizbookFormData) => {
        mutate(data, {
            onSuccess: () => {
                resetStore()
                reset()
                router.push('/quizbook')
            },
            onError: (e) => {
                const err = e as AxiosError<ErrorResponse>
                const msg =
                    err.response?.data.message ||
                    '문제집 생성 중 에러가 발생했습니다.'

                toast.error(msg)
            },
        })
    }

    const onInvalid = (errors: typeof formState.errors) => {
        if(errors.quizList) {
            toast.error(errors.quizList.message)
        }
    }

    // 폼 상태 초기화
    useEffect(() => {
        if (hydrated) {
            reset({
                title: title ?? '',
                description: description ?? '',
                category,
            })
        }
    }, [hydrated, reset])

    // Meta 정보 상태 동기화
    useEffect(() => {
        const subscription = watch(({ quizList: _, ...rest }) => {
            setMeta(rest as Partial<PostQuizbookFormData>)
        })

        return () => subscription.unsubscribe()
    }, [watch, setMeta])

    // QuizList 상태 동기화
    useEffect(() => {
        if (quizList && hydrated) setValue('quizList', quizList)
    }, [quizList, setValue, hydrated])

    return (
        <FormProvider {...methods}>
            <form
                id="post-quizbook-form"
                className="flex flex-1 flex-col gap-[8px]"
                onSubmit={handleSubmit(onSubmit, onInvalid)}
            >
                {/* 카테고리 영역 */}
                <CustomSelect
                    id="category"
                    name="category"
                    label="카테고리"
                    placeholder="카테고리 선택"
                    className="bg-white"
                >
                    {Object.entries(QUIZBOOK_CATEGORY).map(([key, value]) => (
                        <CustomSelect.Item key={key} value={value}>
                            {value}
                        </CustomSelect.Item>
                    ))}
                </CustomSelect>

                {/* 제목 영역 */}
                <CustomInput
                    id="title"
                    name="title"
                    label="제목"
                    placeholder="제목을 입력해주세요."
                />

                {/* 설명 영역 */}
                <CustomInput
                    id="description"
                    name="description"
                    label="설명"
                    placeholder="간략한 설명을 입력해주세요."
                />

                {/* 추가 카드 리스트 영역 */}
                <div className="flex w-full flex-1 flex-col gap-1">
                    <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                        {`추가된 문제 (총 ${quizList?.length})`}
                    </span>
                    <div className="flex w-full flex-1 flex-col gap-[8px] px-[8px] pl-0 md:px-[16px] md:pl-0">
                        {quizList?.map((quiz, idx) => (
                            <AddedQuiz
                                key={`${quiz}-${idx}`}
                                quiz={quiz}
                                idx={idx}
                                onRemove={() => removeQuiz(idx)}
                            />
                        ))}
                    </div>
                </div>
            </form>

            {/* 버튼 영역 */}
            <div className="flex flex-col gap-[8px]">
                <Link
                    className="btn-outline btn-mobile-lg flex w-full items-center justify-center md:btn-pc-lg"
                    href={'/quizbook/post/add'}
                >
                    <PlusSvg className="h-[24px] w-[24px]" />
                </Link>
                <button
                    disabled={isPending}
                    type="submit"
                    form="post-quizbook-form"
                    className={clsx(
                        'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                        {
                            'btn-loading': isPending,
                        },
                    )}
                >
                    {isPending && <LoopAnimation />}
                    {isPending ? '생성중...' : '생성하기'}
                </button>
            </div>
        </FormProvider>
    )
}
