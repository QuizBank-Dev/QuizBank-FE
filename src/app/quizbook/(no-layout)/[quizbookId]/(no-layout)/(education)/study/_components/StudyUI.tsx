'use client'

import { QuestionCard } from '@/components/study'
import {
    getAnswerStore,
    getQuestionStore,
    useRecentQuizbookStore,
} from '@/store/quizbook'
import { QuizbookMeta } from '@/types/quizbook'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { CommentAside, ListAside } from '../../../_components/layout'
import AnswerInput from './AnswerInput'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function StudyUI({ quizbookMeta }: Props) {
    const router = useRouter()
    const panel = useSearchParams().get('panel')

    const { addRecent } = useRecentQuizbookStore()

    const { _id: quizbookId, quizList } = quizbookMeta
    const questionStore = getQuestionStore(quizbookId)
    const answerStore = getAnswerStore(quizbookId)

    const { curIdx, next, prev } = questionStore()
    const curQuiz = quizList[curIdx - 1]

    const value = answerStore((s) =>
        curQuiz._id ? s.answerMap[curQuiz._id] : undefined,
    )
    const setAnswer = answerStore((s) => s.setAnswer)

    useEffect(() => {
        addRecent({
            _id: quizbookMeta._id,
            title: quizbookMeta.title,
            category: quizbookMeta.category,
            count: quizbookMeta.quizList.length,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    onClick={() =>
                        router.push(`/quizbook/${quizbookId}/confirm`)
                    }
                    className="btn-solid btn-mobile-lg w-full md:btn-pc-lg"
                >
                    제출하기
                </button>
            </div>

            {panel === 'list' && <ListAside quizbookMeta={quizbookMeta} />}
            {panel === 'comment' && (
                <CommentAside quizbookMeta={quizbookMeta} />
            )}
        </div>
    )
}
