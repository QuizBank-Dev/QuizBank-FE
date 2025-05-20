'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { toast } from 'sonner'
import { useCurrentUser } from '@/hooks/queries/user'
import { postQuizbookLike } from '@/lib/api/like'
import { useQuizbookCardContext } from './QuizbookCardContext'

import HeartFillSvg from '@/assets/svgs/heart-fill.svg'

interface Props {
    isLike?: boolean
}

export default function LikeButton({ isLike }: Props) {
    const { id: quizbookId } = useQuizbookCardContext()
    const { data: user } = useCurrentUser()
    const [_isLike, setIsLike] = useState(isLike)

    const handleLike = () => {
        if (!user) {
            // 로그인상태가 아닌 경우
            toast('로그인이 필요한 서비스입니다.')
            return
        }

        // 찜하기 클릭 로직 (API 호출)
        postQuizbookLike(quizbookId)
            .then(({ result: { state } }) => {
                setIsLike(state)
                toast(
                    state
                        ? '찜목록에 추가되었습니다.'
                        : '찜목록에서 제거되었습니다.',
                )
            })
            .catch(() => {
                toast('저장 중 오류가 발생했습니다.')
            })
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
