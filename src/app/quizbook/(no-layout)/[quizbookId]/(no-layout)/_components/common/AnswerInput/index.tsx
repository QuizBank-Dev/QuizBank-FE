'use client'

import { QUIZ_TYPE } from '@/constants/quiz'
import { Quiz } from '@/types/quiz'
import OXAnswerInput from './OXAnswerInput'
import MultipleAnswerInput from './MultipleAnswerInput'
import ShortAnswerInput from './ShortAnswerInput'
import LongAnswerInput from './LongAnswerInput'

interface Props {
    quiz: Quiz
    value?: string
    setAnswer: (quizId: string, answer: string) => void
}

export default function AnswerInput({ quiz, value, setAnswer }: Props) {
    const onChange = (answer: string) => {
        setAnswer(quiz._id, answer)
    }

    const render = () => {
        switch (quiz.type) {
            case QUIZ_TYPE.OX:
                return <OXAnswerInput value={value} onChange={onChange} />
            case QUIZ_TYPE.MULTIPLE:
                return (
                    <MultipleAnswerInput
                        optionList={quiz.optionList ?? []}
                        value={value}
                        onChange={onChange}
                    />
                )
            case QUIZ_TYPE.SHORT:
                return <ShortAnswerInput value={value} onChange={onChange} />
            case QUIZ_TYPE.LONG:
                return <LongAnswerInput value={value} onChange={onChange} />
            default:
                return null
        }
    }

    return (
        <article className="relative flex max-h-[250px] min-h-[250px] flex-col justify-center gap-[8px] rounded-lg bg-white p-[16px] shadow-point md:max-h-[400px] md:min-h-[400px] md:gap-[16px] md:p-[32px]">
            <span className="text-center text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                Answer
            </span>
            {render()}
        </article>
    )
}
