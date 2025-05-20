'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { toast } from 'sonner'
import { useCurrentUser } from '@/hooks/queries/user'
import { useQuizbookCardContext } from './QuizbookCardContext'

import HeartFillSvg from '@/assets/svgs/heart-fill.svg'
import { usePostQuizbookListLike } from '@/hooks/mutations/like'

interface Props {
    isLike?: boolean
}

export default function LikeButton({ isLike }: Props) {
    const { id: quizbookId } = useQuizbookCardContext()
    const { data: user } = useCurrentUser()
    const [_isLike, setIsLike] = useState(isLike)

    const toggleIsLike = () => {
        setIsLike((prev) => !prev)
    }

    const { mutate: like } = usePostQuizbookListLike(quizbookId, toggleIsLike)

    const handleLike = () => {
        if (!user) {
            // 로그인상태가 아닌 경우
            toast('로그인이 필요한 서비스입니다.')
            return
        }
        like()
    }

    return (
        <button
            className="rounded-full p-2 duration-300 hover:bg-black/5"
            onClick={handleLike}
        >
            <HeartFillSvg
                className={clsx(
                    'size-5',
                    _isLike ? 'text-point-500' : 'text-gray-300',
                )}
            />
        </button>
    )
}
