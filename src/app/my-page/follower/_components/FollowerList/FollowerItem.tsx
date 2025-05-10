import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { toast } from 'sonner'
import { Follower } from '@/types/user'
import { LoopAnimation, ProfileImage } from '@/components'

interface Props {
    followType: string
    user: Follower
}

export default function FollowerItem({
    followType,
    user: { _id, profileImg, nickname },
}: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const handleCancelFollow = async () => {
        setIsLoading(true)
        // TODO 팔로우 취소 API 호출
        const result = await new Promise<string>((resolve) =>
            setTimeout(() => {
                console.log(followType)
                resolve('OK')
            }, 2000),
        )
        setIsLoading(false)

        if (result === 'OK') {
            toast('팔로우 취소 되었습니다.')
        } else {
            toast('팔로우 취소 중 오류가 발생했습니다.')
        }
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
                type="submit"
                className={clsx(
                    'btn-outline btn-mobile-sm md:btn-pc-sm',
                    isLoading && 'btn-loading',
                )}
                onClick={handleCancelFollow}
                disabled={isLoading}
            >
                {isLoading && <LoopAnimation />}
                {isLoading ? 'Loading...' : '팔로우 취소'}
            </button>
        </div>
    )
}
