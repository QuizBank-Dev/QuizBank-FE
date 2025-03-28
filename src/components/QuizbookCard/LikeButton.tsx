'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { useQuizbookCardContext } from './QuizbookCardContext'

import HeartFillSvg from '@/assets/svgs/heart-fill.svg'

interface Props {
    isLike?: boolean
}

export default function LikeButton({ isLike }: Props) {
    const { id: quizbookId } = useQuizbookCardContext()
    const [_isLike, setIsLike] = useState(isLike)

    const handleLike = () => {
        // 찜하기 클릭 로직 (API 호출)
        console.log(quizbookId)
        setIsLike(!_isLike)
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
