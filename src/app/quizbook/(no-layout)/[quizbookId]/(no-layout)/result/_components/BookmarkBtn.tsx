'use client'

import BookMarkSvg from '@/assets/svgs/bookmark.svg'

import { usePostQuizLike } from '@/hooks/mutations/like'
import clsx from 'clsx'
import { useState } from 'react'
import { toast } from 'sonner'

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
                toast.success(`북마크 ${data.state ? '추가' : '제거'} 됨.`)
            },
            onError: () => {
                toast.error('북마크 등록 중 에러가 발생했습니다.')
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
