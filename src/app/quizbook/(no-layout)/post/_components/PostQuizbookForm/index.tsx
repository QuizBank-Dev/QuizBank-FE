'use client'

import PlusSvg from '@/assets/svgs/plus.svg'

import { usePostQuizbookStore } from '@/store/quizbook'
import { FormProvider, useForm } from 'react-hook-form'
import {
    PostQuizbookFormValues,
    postQuizbookSchema,
} from '../../_schema/post-quizbook'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomInput, CustomSelect } from '@/components'
import { QUIZBOOK_CATEGORY } from '@/constants/quizbook'
import AddedQuiz from './AddedQuiz'
import Link from 'next/link'
import { useEffect } from 'react'

export default function PostQuizbookForm() {
    const methods = useForm<PostQuizbookFormValues>({
        resolver: zodResolver(postQuizbookSchema),
        mode: 'onChange',
        defaultValues: {
            title: '',
            category: undefined,
            quizList: [],
        },
    })

    const { handleSubmit, setValue, reset } = methods

    const { quizList, resetQuizList } = usePostQuizbookStore()

    const onSubmit = (data: PostQuizbookFormValues) => {
        // TODO: API 연동 로직 및 페이지 이동
        console.log(data)

        resetQuizList()
        reset()
    }

    // TODO: AUTO SAVE 기능 추가

    useEffect(() => {
        setValue('quizList', quizList)
    }, [quizList, setValue])

    return (
        <FormProvider {...methods}>
            <form
                id="post-quizbook-form"
                className="flex min-h-0 flex-1 flex-col gap-[8px]"
                onSubmit={handleSubmit(onSubmit)}
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

                {/* 추가 카드 리스트 영역 */}
                <div className="flex w-full flex-1 flex-col gap-1 overflow-hidden">
                    <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                        {`추가된 문제(총 ${quizList.length})`}
                    </span>
                    <div className="custom-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-y-auto px-[8px] pl-0 md:px-[16px] md:pl-0">
                        {quizList.map((quiz, idx) => (
                            <AddedQuiz
                                key={`${quiz}-${idx}`}
                                quiz={quiz}
                                idx={idx}
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
                    type="submit"
                    form="post-quizbook-form"
                    className="btn-solid btn-mobile-lg w-full md:btn-pc-lg"
                >
                    생성하기
                </button>
            </div>
        </FormProvider>
    )
}
