'use client'

import { useRouter } from 'next/navigation'
import { QuizbookCard as Card } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { Quizbook } from '@/types/quizbook'

type Props = Quizbook

export default function QuizbookCard({ ...quizbook }: Props) {
    const router = useRouter()
    const handleQuizbookClick = () =>
        router.push(`/quizbook/${quizbook._id}/info`)
    return (
        <Card
            id={quizbook._id}
            {...quizbook}
            badge={{
                status: quizbook.isStudied
                    ? QuizbookCardStatus.COMPLETED
                    : QuizbookCardStatus.BEFORE,
            }}
            onClick={handleQuizbookClick}
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
