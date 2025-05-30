import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useCurrentUser } from '@/hooks/queries/user'
import { usePostQuizbookListLike } from '@/hooks/mutations/like'
import { Quizbook } from '@/types/quizbook'
import { QuizbookCard as Card } from '@/components'
import HeartFillIcon from '@/assets/svgs/heart-fill.svg'
import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'

type Props = Quizbook

export default function QuizbookCard({ _id, ...quizbook }: Props) {
    const router = useRouter()
    const [isLiked, setIsLiked] = useState(quizbook.isLiked)
    const { data: user } = useCurrentUser()
    const { mutate } = usePostQuizbookListLike(_id, () =>
        setIsLiked((prev) => !prev),
    )

    const handleCheckIsLoggedIn = (
        event: React.MouseEvent,
        fn?: () => void,
    ) => {
        if (!user) {
            event.preventDefault()
            toast('로그인이 필요한 서비스입니다.')
        } else {
            fn?.()
        }
    }

    return (
        <Card
            className="shrink-0 basis-11/12 sm:basis-96"
            id={_id}
            {...quizbook}
            onClick={() => router.push(`/quizbook/${_id}/info`)}
        >
            <Card.Author />
            <div className="flex gap-2">
                <Card.SolvedRate />
                <Card.ReviewRate />
                <Card.QuizCount />
            </div>
            <div className="flex w-full gap-1">
                <button
                    className="btn-outline btn-mobile-sm flex flex-1 items-center justify-center gap-1 md:btn-pc-sm [&>svg]:!size-3 md:[&>svg]:!size-5"
                    onClick={(event) => handleCheckIsLoggedIn(event, mutate)}
                >
                    {isLiked ? <HeartFillIcon /> : <HeartOutlineIcon />}
                    <span>{isLiked ? '찜하기 취소' : '찜하기'}</span>
                </button>
                <Link
                    className="btn-solid btn-mobile-sm flex flex-1 items-center justify-center md:btn-pc-sm"
                    href={`/quizbook/${_id}/study`}
                    onClick={handleCheckIsLoggedIn}
                >
                    {quizbook.isStudied ? '다시 학습하기' : '학습하기'}
                </Link>
            </div>
        </Card>
    )
}
