'use client'

import { QuestionCard, SolvedCard } from '@/components/study'
import { getQuestionStore } from '@/store/quizbook'
import { useSearchParams } from 'next/navigation'
import { QuizbookMeta } from '@/types/quizbook'
import ListAside from './ListAside'
import CommentAside from './CommentAside'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function SolutionUI({ quizbookMeta }: Props) {
    const panel = useSearchParams().get('panel')

    const { quizList } = quizbookMeta
    const questionStore = getQuestionStore(quizbookMeta._id)
    const { curIdx, next, prev } = questionStore()
    const curQuiz = quizList[curIdx - 1]

    return (
        <div className="mb-[16px] flex flex-1 flex-col justify-between gap-[32px] md:mb-[32px]">
            <section className="flex flex-col justify-center gap-[32px]">
                <QuestionCard
                    curIdx={curIdx}
                    quiz={quizList[curIdx - 1]}
                    totalIdx={quizList.length}
                    onNext={() => next(quizList.length)}
                    onPrev={prev}
                />
                <div className="px-[16px] md:px-[32px]">
                    <SolvedCard role="ai" quiz={curQuiz} />
                </div>
            </section>

            <div className="flex flex-col gap-[32px] px-[16px] md:px-[32px]">
                {/* TODO: 사용자 작성 답안 가져오기 */}
            </div>

            <button className="text-mobile-body-sm font-semi-bold text-point-500 md:text-pc-body-sm">
                다른 사용자 답안 보기
            </button>

            {panel === 'list' && <ListAside quizbookMeta={quizbookMeta} />}
            {panel === 'comment' && (
                <CommentAside quizbookMeta={quizbookMeta} />
            )}
        </div>
    )
}
