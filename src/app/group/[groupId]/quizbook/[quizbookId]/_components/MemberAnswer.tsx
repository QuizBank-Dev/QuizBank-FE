import clsx from 'clsx'
import { Props } from './StudyStatus'
import { QuestionCard } from '@/components/study'
import { useState } from 'react'
import AnswerList from './AnswerList'

export default function MemberAnswer({
    quizList,
    activeTab,
}: Partial<Props> & { activeTab: string }) {
    const [pageNumber, setPageNumber] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)

    if (!quizList) return null

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
            <div className="mx-4 flex flex-col items-center gap-4 md:mx-8 md:gap-8">
                <QuestionCard
                    curIdx={pageNumber + 1}
                    totalIdx={quizList.length}
                    quiz={{
                        type: quizList[pageNumber].type,
                        question: quizList[pageNumber].question,
                    }}
                    onPrev={onPrevHandler}
                    onNext={onNextHandler}
                />
                {showAnswers ? (
                    <AnswerList quizId={quizList[pageNumber]._id} />
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
