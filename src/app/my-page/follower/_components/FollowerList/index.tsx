'use client'

import { useSearchParams } from 'next/navigation'
import { Follower } from '@/types/user'
import FollowerItem from './FollowerItem'

interface Props {
    followerList: Record<string, Follower[]>
}

export default function FollowerList({ followerList }: Props) {
    const searchParams = useSearchParams()
    const selectedTab = searchParams.get('tab') || 'following'

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-point">
            {followerList[selectedTab].map((follower) => (
                <FollowerItem
                    key={`${selectedTab}_${follower._id}`}
                    followType={selectedTab}
                    user={follower}
                />
            ))}
        </div>
    )
}
