'use client'

import { QuizbookCard as Card, QuizbookCard } from '@/components'
import { Quizbook } from '@/types/quizbook'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'

interface Props {
    quizbookList: Quizbook[]
}

export default function QuizbookList({ quizbookList }: Props) {
    return (
        <div>
            <p className="mb-2 text-mobile-body-md font-semi-bold md:text-pc-body-md">
                <span className="text-point-500">
                    {quizbookList.length.toLocaleString()}
                </span>
                개의 결과
            </p>
            <div className="flex flex-col gap-4">
                {quizbookList.map((quizbook) => (
                    <QuizbookCard
                        key={quizbook._id}
                        id={quizbook._id}
                        {...quizbook}
                        badge={{
                            status: quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        onClick={() => {}}
                    >
                        <QuizbookCard.Description />
                        <QuizbookCard.Author />
                        <div className="flex w-full justify-between">
                            <div className="flex items-center gap-2">
                                <Card.SolvedRate />
                                <Card.ReviewRate />
                                <Card.QuizCount />
                            </div>
                            <Card.LikeButton isLike={quizbook.isLiked} />
                        </div>
                    </QuizbookCard>
                ))}
            </div>
        </div>
    )
}
