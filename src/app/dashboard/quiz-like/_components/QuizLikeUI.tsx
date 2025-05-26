'use client'

import { useState } from 'react'
import StudySvg from '@/assets/svgs/study.svg'

import { EmptyList } from '@/components'
import { QuestionCard, SolvedCard } from '@/components/study'
import { useInfiniteQuizLikeList } from '@/hooks/queries/like'
import { useInfiniteSolvedAnswerList } from '@/hooks/queries/study'

export default function QuizLikeUI() {
    const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
        useInfiniteQuizLikeList()

    const quizLikeList = data?.pages.flatMap((p) => p.data) ?? []
    const totalCount = data?.pages[0]?.totalCount ?? 0

    const [curIdx, setCurIdx] = useState(0)
    const currentQuiz = quizLikeList[curIdx]

    const handleNext = () => {
        if (curIdx < quizLikeList.length - 1) {
            setCurIdx((prev) => prev + 1)
        } else if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage().then(() => {
                setCurIdx((prev) => prev + 1)
            })
        }
    }

    const handlePrev = () => {
        if (curIdx > 0) {
            setCurIdx((prev) => prev - 1)
        }
    }

    const { data: solvedAnswerResponse } = useInfiniteSolvedAnswerList(
        currentQuiz?._id,
    )

    const solvedAnswer = solvedAnswerResponse?.pages[0]?.data?.[0]

    if (!isPending && quizLikeList.length === 0) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <EmptyList
                    Icon={StudySvg}
                    text="북마크 된 다시 볼 문제가 없습니다."
                />
            </div>
        )
    }

    return (
        <div className="flex flex-1 flex-col gap-[16px]">
            {currentQuiz && (
                <>
                    <QuestionCard
                        quiz={currentQuiz}
                        curIdx={curIdx + 1} // 1-based index for display
                        totalIdx={totalCount}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                    <div className="px-[16px] md:px-[32px]">
                        <SolvedCard role="ai" quiz={currentQuiz} />
                    </div>
                    <div className="px-[16px] md:px-[32px]">
                        <SolvedCard
                            role="user"
                            quiz={currentQuiz}
                            data={solvedAnswer}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
