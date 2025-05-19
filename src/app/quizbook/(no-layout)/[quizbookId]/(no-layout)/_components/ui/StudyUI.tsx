'use client'

import { QuestionCard } from '@/components/study'
import { getAnswerStore, getQuestionStore } from '@/store/quizbook'
import { AnswerInput } from '../common'
import { QuizbookMeta } from '@/types/quizbook'
import { useSearchParams } from 'next/navigation'
import ListAside from './ListAside'
import CommentAside from './CommentAside'
import { usePostStudy } from '@/hooks/mutations/study'
import clsx from 'clsx'
import { LoopAnimation } from '@/components'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function StudyUI({ quizbookMeta }: Props) {
    const panel = useSearchParams().get('panel')

    const { _id: quizbookId, quizList } = quizbookMeta
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
        const answerList = quizList.map((quiz) => ({
            quizId: quiz._id,
            answer: answerMap[quiz._id] || '',
        }))
        postStudy({
            answerList,
        })
    }

    const handleSuccess = () => {
        answerReset()
        questionReset()
    }

    const { mutate: postStudy, isPending } = usePostStudy(
        quizbookMeta._id,
        handleSuccess,
    )

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
                    disabled={isPending}
                    onClick={handleSubmit}
                    className={clsx(
                        'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                        {
                            'btn-loading': isPending,
                        },
                    )}
                >
                    {isPending && <LoopAnimation />}
                    {isPending ? '제출중...' : '제출하기'}
                </button>
            </div>

            {panel === 'list' && <ListAside quizbookMeta={quizbookMeta} />}
            {panel === 'comment' && (
                <CommentAside quizbookMeta={quizbookMeta} />
            )}
        </div>
    )
}
