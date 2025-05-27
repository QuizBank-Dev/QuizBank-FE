'use client'

import BookMarkSvg from '@/assets/svgs/bookmark.svg'

import { usePostQuizLike } from '@/hooks/mutations/like'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface Props {
    quizId: string
    initState: boolean
}

export default function QuizLikeBtn({ quizId, initState }: Props) {
    const [isLiked, setIsLiked] = useState<boolean>()

    const { mutate, isPending } = usePostQuizLike(quizId)

    useEffect(() => {
        setIsLiked(initState)
    }, [quizId, initState])

    const handleClick = () => {
        if (isPending) return

        mutate(undefined, {
            onSuccess: (data) => {
                setIsLiked(data.state)
                toast.success(`북마크 ${data.state ? '추가' : '제거'} 됨.`)
            },
            onError: () => {
                toast.error('북마크 등록 중 에러가 발생했습니다.')
            },
        })
    }

    return (
        <button
            className={clsx(
                'flex items-center gap-[2px] text-mobile-body-sm md:text-pc-body-sm',
                {
                    'text-point-500': isLiked,
                    'text-gray-400': !isLiked,
                },
            )}
            onClick={handleClick}
        >
            <BookMarkSvg className="size-5" />
            다시 볼 문제
        </button>
    )
}
