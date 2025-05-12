'use client'

import { QuestionCard } from '@/components/study'
import { QuizType } from '@/types/quiz'
import { useState } from 'react'

const quizList = [
    {
        _id: '1',
        type: '주관식' as QuizType,
        question: 'test1',
        optionList: [],
    },
    {
        _id: '2',
        type: '서술형' as QuizType,
        question: 'test2',
        optionList: [],
    },
    {
        _id: '3',
        type: '주관식' as QuizType,
        question: 'test3',
        optionList: [],
    },
]

export default function Preview() {
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
