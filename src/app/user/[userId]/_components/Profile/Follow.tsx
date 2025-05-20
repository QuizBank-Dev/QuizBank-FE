'use client'

import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { useCurrentUser, useOtherUser } from '@/hooks/queries/user'
import { useFollowMutation } from '@/hooks/mutations/user'

export default function Follow() {
    const { userId } = useParams<{ userId: string }>()

    const { data: user } = useCurrentUser()
    const { data: targetUser } = useOtherUser(userId)
    const { mutate: toggleFollow } = useFollowMutation(userId)
    const { follower } = targetUser!

    const isFollowed = useMemo(
        () => follower.includes(user?._id || ''),
        [follower, user?._id],
    )

    const handleFollowClick = () => {
        toggleFollow(isFollowed)
    }

    return (
        <div className="w-full text-center">
            <button
                className={clsx(
                    'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                    isFollowed && 'btn-outline',
                )}
                onClick={handleFollowClick}
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
