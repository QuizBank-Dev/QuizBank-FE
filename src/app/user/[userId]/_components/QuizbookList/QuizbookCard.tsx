'use client'

import { QuizbookCard as Card } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { Quizbook } from '@/types/quizbook'

type Props = Quizbook

export default function QuizbookCard({ ...quizbook }: Props) {
    return (
        <Card
            id={quizbook._id}
            {...quizbook}
            badge={{
                status: quizbook.isStudied
                    ? QuizbookCardStatus.COMPLETED
                    : QuizbookCardStatus.BEFORE,
            }}
            onClick={() => {}}
        >
            <Card.Description />
            <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                    <Card.SolvedRate />
                    <Card.ReviewRate />
                    <Card.QuizCount />
                </div>
                <Card.LikeButton isLike={quizbook.isLiked} />
            </div>
        </Card>
    )
}
