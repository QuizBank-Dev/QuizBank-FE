'use client'

import clsx from 'clsx'
import { useMemo } from 'react'

interface Props {
    _id: string
    follower: string[]
}

export default function Follow({ _id, follower }: Props) {
    const isFollowed = useMemo(() => follower.includes('1'), [follower])

    const handleToggleFollow = () => {
        console.log(_id)
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
