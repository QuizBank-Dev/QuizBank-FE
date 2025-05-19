'use client'

import clsx from 'clsx'
import { useMemo } from 'react'
import { toast } from 'sonner'
import { useCurrentUser, useOtherUser } from '@/hooks/queries/user'
import { cancelFollow, follow } from '@/lib/api/follow'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { QueryKey } from '@/constants/common/queryKey'
import { useParams } from 'next/navigation'

export default function Follow() {
    const queryClient = getQueryClient()
    const { userId } = useParams<{ userId: string }>()

    const { data: user } = useCurrentUser()
    const { data: targetUser } = useOtherUser(userId)
    const { _id, follower } = targetUser!

    const isFollowed = useMemo(
        () => follower.includes(user?._id || ''),
        [follower, user?._id],
    )

    const handleToggleFollow = () => {
        const method = !isFollowed
            ? follow
            : (_id: string) => cancelFollow(_id, 'following')

        method(_id)
            .then(() => {
                toast(`팔로우했습니다.`)
                queryClient.invalidateQueries({
                    queryKey: QueryKey.user.other(_id),
                })
            })
            .catch(() => toast.error('실패했습니다.'))
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
