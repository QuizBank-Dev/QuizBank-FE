'use client'

import { QuestionCard, SolvedCard } from '@/components/study'
import { getQuestionStore } from '@/store/quizbook'
import { QuizWithAnswer } from '@/types/quiz'
import { useSearchParams } from 'next/navigation'
import { Quizbook } from '@/types/quizbook'
import ListAside from './ListAside'
import CommentAside from './CommentAside'

interface Props {
    quizbook: Quizbook<QuizWithAnswer>
}

export default function SolutionUI({ quizbook }: Props) {
    const panel = useSearchParams().get('panel')

    const { quizList } = quizbook
    const questionStore = getQuestionStore(quizbook._id)
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
                    <SolvedCard
                        type={curQuiz.type}
                        role="ai"
                        correct={curQuiz.answer}
                        optionList={curQuiz.optionList}
                    />
                </div>
            </section>
            <button className="text-mobile-body-sm font-semi-bold text-point-500 md:text-pc-body-sm">
                다른 사용자 답안 보기
            </button>

            {panel === 'list' && <ListAside quizbook={quizbook} />}
            {panel === 'comment' && <CommentAside quizbook={quizbook} />}
        </div>
    )
}
