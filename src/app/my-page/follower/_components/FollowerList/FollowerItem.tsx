import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Follower } from '@/types/user'
import { ProfileImage } from '@/components'
import { useFollowMutation } from '@/hooks/mutations/user'
import { FollowerType } from '@/types/api/follow'

interface Props {
    followType: Exclude<FollowerType, 'all'>
    user: Follower
}

export default function FollowerItem({
    followType,
    user: { _id, profileImg, nickname },
}: Props) {
    // 최초 접속 시 팔로우 목록에 등록된 사용자기 때문에 true
    const [isFollowed, setIsFollowed] = useState(true)
    const { mutate: toggleFollow } = useFollowMutation(_id, () =>
        setIsFollowed((prev) => !prev),
    )

    const handleCancelFollow = async () => {
        toggleFollow({ isFollowed, type: followType })
    }

    return (
        <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-100">
            <Link
                href={`/user/${_id}`}
                className="flex cursor-pointer items-center gap-4"
            >
                <ProfileImage size={32} profileImg={profileImg} />
                <span>{nickname}</span>
            </Link>
            <button
                className={clsx(
                    'btn-mobile-sm md:btn-pc-sm',
                    isFollowed ? 'btn-outline' : 'btn-solid',
                )}
                onClick={handleCancelFollow}
            >
                {isFollowed ? '팔로우 취소' : '팔로우'}
            </button>
        </div>
    )
}
