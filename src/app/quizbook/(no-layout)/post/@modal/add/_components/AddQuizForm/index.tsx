'use client'

import { CustomSelect } from '@/components'
import { QUIZ_TYPE } from '@/constants/quiz'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { CustomInput } from '@/components'
import AnswerInput from './AnswerInput'
import { useEffect } from 'react'
import { usePostQuizbookStore } from '@/store/quizbook'
import { useRouter } from 'next/navigation'
import { AddQuizFormData, addQuizSchema } from '@/types/schemas/quizbook'

export default function AddQuizForm() {
    const { addQuiz } = usePostQuizbookStore()
    const router = useRouter()

    const methods = useForm<AddQuizFormData>({
        resolver: zodResolver(addQuizSchema),
        defaultValues: {
            type: QUIZ_TYPE.OX,
        },
        mode: 'onChange',
    })
    const { handleSubmit, setValue, unregister, control } = methods
    const type = useWatch({ control, name: 'type' })

    const onSubmit = (data: AddQuizFormData) => {
        addQuiz(data)
        router.back()
    }

    useEffect(() => {
        if (type === QUIZ_TYPE.MULTIPLE) {
            setValue('optionList', ['', '', '', ''])
            setValue('answer', '')
        } else unregister('optionList')
    }, [type, setValue, unregister])

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col gap-[16px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* 유형 영역 */}
                <CustomSelect
                    id="type"
                    name="type"
                    label="유형"
                    placeholder="유형 선택"
                >
                    {Object.entries(QUIZ_TYPE).map(([key, value]) => (
                        <CustomSelect.Item key={key} value={value}>
                            {value}
                        </CustomSelect.Item>
                    ))}
                </CustomSelect>

                {/* 질문 영역 */}
                <CustomInput
                    id="question"
                    name="question"
                    label="질문"
                    area={true}
                    placeholder="질문을 입력해주세요."
                />

                {/* 답안 영역 */}
                <AnswerInput />

                {/* 버튼 영역 */}
                <button className="btn-solid btn-mobile-lg w-full md:btn-pc-lg">
                    추가하기
                </button>
            </form>
        </FormProvider>
    )
}
