'use client'

import { QuestionCard, SolvedCard } from '@/components/study'
import { getQuestionStore } from '@/store/quizbook'
import { useSearchParams } from 'next/navigation'
import { QuizbookMeta } from '@/types/quizbook'
import ListAside from './ListAside'
import CommentAside from './CommentAside'
import { useInfiniteSolvedAnswerList } from '@/hooks/queries/study'
import { useRef, useState } from 'react'
import { InfiniteScrollContainer } from '@/components'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function SolutionUI({ quizbookMeta }: Props) {
    const panel = useSearchParams().get('panel')

    const [showAnswerList, setShowAnswerList] = useState(false)
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const { quizList } = quizbookMeta
    const questionStore = getQuestionStore(quizbookMeta._id)
    const { curIdx, next, prev } = questionStore()
    const curQuiz = quizList[curIdx - 1]

    const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
        useInfiniteSolvedAnswerList(curQuiz._id)
    const solvedAnswerList = data?.pages.flatMap((p) => p.data) ?? []

    return (
        <div className="mb-[16px] flex flex-1 flex-col gap-[32px] md:mb-[32px]">
            <section className="flex flex-col justify-center gap-[32px]">
                <QuestionCard
                    curIdx={curIdx}
                    quiz={quizList[curIdx - 1]}
                    totalIdx={quizList.length}
                    onNext={() => {
                        setShowAnswerList(false)
                        next(quizList.length)
                    }}
                    onPrev={() => {
                        setShowAnswerList(false)
                        prev()
                    }}
                />
                <div className="px-[16px] md:px-[32px]">
                    <SolvedCard role="ai" quiz={curQuiz} />
                </div>
            </section>

            {showAnswerList && (
                <div className="mb-[8px] flex flex-col gap-[32px] px-[16px] md:mb-[16px] md:px-[32px]">
                    <InfiniteScrollContainer
                        className="flex flex-col gap-[16px]"
                        rootRef={scrollRef as React.RefObject<HTMLDivElement>}
                        isPending={isPending}
                        hasNextPage={hasNextPage}
                        isFetchingNextPage={isFetchingNextPage}
                        fetchNextPage={fetchNextPage}
                    >
                        {solvedAnswerList.map((solvedAnswer) => (
                            <SolvedCard
                                key={solvedAnswer.owner._id}
                                data={solvedAnswer}
                                role="user"
                                quiz={curQuiz}
                            />
                        ))}
                    </InfiniteScrollContainer>
                </div>
            )}

            {!showAnswerList && (
                <button
                    onClick={() => setShowAnswerList(true)}
                    className="text-mobile-body-sm font-semi-bold text-point-500 md:text-pc-body-sm"
                >
                    다른 사용자 답안 보기
                </button>
            )}

            {panel === 'list' && <ListAside quizbookMeta={quizbookMeta} />}
            {panel === 'comment' && (
                <CommentAside quizbookMeta={quizbookMeta} />
            )}
        </div>
    )
}
