'use client'

import { QuestionCard } from '@/components/study'
import { Quiz } from '@/types/quiz'
import { useState } from 'react'

export default function Preview({ quizList }: { quizList: Quiz[] }) {
    const [pageNumber, setPageNumber] = useState(0)

    const onPrevHandler = () => {
        if (pageNumber === 0) return
        setPageNumber((prev) => prev - 1)
    }

    const onNextHandler = () => {
        if (pageNumber === quizList.length - 1) return
        setPageNumber((prev) => prev + 1)
    }

    return (
        <section className="flex w-full flex-col font-semi-bold">
            <h2 className="text-mobile-body-lg md:text-pc-body-lg">
                Preview 문제
            </h2>
            <QuestionCard
                curIdx={pageNumber + 1}
                totalIdx={quizList.length}
                quiz={quizList[pageNumber]}
                background={false}
                onPrev={onPrevHandler}
                onNext={onNextHandler}
            />
        </section>
    )
}
