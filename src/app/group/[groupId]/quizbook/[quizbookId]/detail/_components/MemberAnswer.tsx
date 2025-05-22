'use client'

import clsx from 'clsx'
import { QuestionCard } from '@/components/study'
import { useState } from 'react'
import AnswerList from './AnswerList'
import { Quiz } from '@/types/quiz'
import { useParams } from 'next/navigation'
import { useGroupMemberAnswerQuery } from '@/hooks/queries/group-quizbook'

interface Props {
    quizList: Quiz[] | undefined
    activeTab: string
}

export default function MemberAnswer({ quizList, activeTab }: Props) {
    const [pageNumber, setPageNumber] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)
    const { groupId, quizbookId } = useParams()
    const queries = useGroupMemberAnswerQuery(
        groupId as string,
        quizbookId as string,
        quizList || [],
    )

    if (!quizList || !queries.every((q) => q.isSuccess)) return null

    const onPrevHandler = () => {
        if (pageNumber === 0) return
        setPageNumber((prev) => prev - 1)
        setShowAnswers(false)
    }

    const onNextHandler = () => {
        if (pageNumber === quizList.length - 1) return
        setPageNumber((prev) => prev + 1)
        setShowAnswers(false)
    }

    return (
        <article
            className={clsx(
                'flex-col gap-2 md:flex',
                activeTab === 'answer' ? 'flex' : 'hidden',
            )}
        >
            <span className="hidden text-pc-body-md text-gray-600 md:block">
                그룹원 답안
            </span>
            <div className="flex flex-col items-center gap-4 md:gap-8">
                <div className="h-auto w-full">
                    <QuestionCard
                        curIdx={pageNumber + 1}
                        totalIdx={quizList.length}
                        quiz={quizList[pageNumber]}
                        onPrev={onPrevHandler}
                        onNext={onNextHandler}
                    />
                </div>
                {showAnswers ? (
                    <AnswerList
                        quiz={quizList[pageNumber]}
                        answerList={queries[pageNumber].data}
                    />
                ) : (
                    <span
                        className="cursor-pointer text-mobile-body-sm text-point-500 md:text-pc-body-sm"
                        onClick={() => {
                            setShowAnswers(true)
                        }}
                    >
                        그룹원 답안 확인하기
                    </span>
                )}
            </div>
        </article>
    )
}
