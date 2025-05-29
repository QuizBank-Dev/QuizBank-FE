'use client'

import CloseSvg from '@/assets/svgs/close.svg'

import AddedQuizField from './AddedQuizField'
import { QUIZ_TYPE } from '@/constants/quiz'
import { AddQuizFormData } from '@/types/schemas/quizbook/add-quiz.schema'

interface Props {
    quiz: AddQuizFormData
    idx: number
    onRemove: () => void
}

export default function AddedQuiz({ quiz, idx, onRemove }: Props) {
    const handleClickRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onRemove()
    }

    return (
        <div className="flex flex-col rounded-lg bg-white p-[16px] md:bg-point-50 md:px-[32px]">
            {/* 카드 타이틀 및 삭제 버튼 */}
            <div className="flex justify-end pl-[15px] md:pl-[20px]">
                <span className="flex-1 text-center text-mobile-body-lg font-semi-bold text-gray-900 md:text-pc-body-lg">
                    {idx + 1}번 문제
                </span>
                <button
                    onClick={handleClickRemove}
                    className="text-gray-900 hover:text-point-500 active:text-point-500"
                >
                    <CloseSvg className="h-[15px] w-[15px] md:h-[20px] md:w-[20px]" />
                </button>
            </div>

            {/* 카드 영역 */}
            <div className="flex flex-col gap-[8px]">
                <AddedQuizField label="질문">{quiz.question}</AddedQuizField>
                {quiz.type !== QUIZ_TYPE.MULTIPLE && (
                    <AddedQuizField
                        label="정답"
                        area={quiz.type === QUIZ_TYPE.LONG}
                    >
                        {quiz.answer}
                    </AddedQuizField>
                )}
                {quiz.type === QUIZ_TYPE.MULTIPLE && (
                    <AddedQuizField label="정답">
                        {quiz.optionList.map((option, idx) => (
                            <AddedQuizField
                                key={`option-${idx}`}
                                className={
                                    option === quiz.answer
                                        ? 'border-point-500'
                                        : undefined
                                }
                            >
                                {option}
                            </AddedQuizField>
                        ))}
                    </AddedQuizField>
                )}
            </div>
        </div>
    )
}
