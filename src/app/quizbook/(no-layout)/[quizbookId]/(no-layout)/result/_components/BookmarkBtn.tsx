'use client'

import BookMarkSvg from '@/assets/svgs/bookmark.svg'

import { usePostQuizLike } from '@/hooks/mutations/like'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
    quizId: string
    initState: boolean
}

export default function BookmarkBtn({ quizId, initState }: Props) {
    const [isLiked, setIsLiked] = useState(initState)

    const { mutate, isPending } = usePostQuizLike(quizId)

    const handleClick = () => {
        if (isPending) return

        mutate(undefined, {
            onSuccess: (data) => {
                setIsLiked(data.state)
            },
        })
    }

    return (
        <button onClick={handleClick}>
            <BookMarkSvg
                className={clsx('size-5 md:size-8', {
                    'text-point-500': isLiked,
                    'text-gray-400': !isLiked,
                })}
            />
        </button>
    )
}
