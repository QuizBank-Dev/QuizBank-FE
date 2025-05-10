'use client'

import { QuestionCard } from '@/components/study'
import { getAnswerStore, getQuestionStore } from '@/store/quizbook'
import { Quiz } from '@/types/quiz'
import { AnswerInput } from '../common'
import { Quizbook } from '@/types/quizbook'
import { useSearchParams } from 'next/navigation'
import ListAside from './ListAside'
import CommentAside from './CommentAside'

interface Props {
    quizbook: Quizbook<Quiz>
}

export default function StudyUI({ quizbook }: Props) {
    const panel = useSearchParams().get('panel')

    const { _id: quizbookId, quizList } = quizbook
    const questionStore = getQuestionStore(quizbookId)
    const answerStore = getAnswerStore(quizbookId)

    const { curIdx, next, prev, reset: questionReset } = questionStore()
    const curQuiz = quizList[curIdx - 1]

    const value = answerStore((s) =>
        curQuiz._id ? s.answerMap[curQuiz._id] : undefined,
    )
    const setAnswer = answerStore((s) => s.setAnswer)
    const answerMap = answerStore((s) => s.answerMap)
    const answerReset = answerStore((s) => s.reset)

    const handleSubmit = () => {
        // TODO: 학습 제출 로직
        const data = {
            quizbookId,
            answerList: quizList.map((quiz) => ({
                quizId: quiz._id,
                answer: answerMap[quiz._id] || '',
            })),
        }
        console.log(data)
        answerReset()
        questionReset()
    }

    return (
        <div className="mb-[16px] flex flex-1 flex-col justify-between gap-[32px] md:mb-[32px]">
            <div className="flex flex-col justify-center gap-[32px]">
                <QuestionCard
                    curIdx={curIdx}
                    quiz={curQuiz}
                    totalIdx={quizList.length}
                    onNext={() => next(quizList.length)}
                    onPrev={prev}
                />
                <div className="px-[16px] md:px-[32px]">
                    <AnswerInput
                        quiz={curQuiz}
                        setAnswer={setAnswer}
                        value={value}
                    />
                </div>
            </div>
            <div className="px-[16px] md:px-[32px]">
                <button
                    onClick={handleSubmit}
                    className="btn-solid btn-mobile-lg w-full md:btn-pc-lg"
                >
                    제출하기
                </button>
            </div>

            {panel === 'list' && <ListAside quizbook={quizbook} />}
            {panel === 'comment' && <CommentAside quizbook={quizbook} />}
        </div>
    )
}
