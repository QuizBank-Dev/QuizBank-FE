'use client'

import clsx from 'clsx'
import { useMemo } from 'react'
import { useCurrentUser } from '@/hooks/queries/user'
import { cancelFollow, follow } from '@/lib/api/follow'
import { toast } from 'sonner'

interface Props {
    _id: string
    follower: string[]
}

export default function Follow({ _id, follower }: Props) {
    const { data: user } = useCurrentUser()
    const isFollowed = useMemo(
        () => follower.includes(user?._id || ''),
        [follower, user?._id],
    )

    const handleToggleFollow = () => {
        const method = !isFollowed
            ? follow
            : (_id: string) => cancelFollow(_id, 'following')

        method(_id)
            .then(() => toast('성공!'))
            .catch(() => toast.error('실패'))
    }

    return (
        <div className="w-full text-center">
            <button
                className={clsx(
                    'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                    isFollowed && 'btn-outline',
                )}
                onClick={handleToggleFollow}
            >
                {isFollowed ? '팔로우 취소' : '팔로우'}
            </button>
            <p className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                <span className="font-semi-bold text-point-500">
                    {follower.length}
                </span>
                명이 팔로우 하고 있습니다.
            </p>
        </div>
    )
}
