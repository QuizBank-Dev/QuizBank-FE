'use client'

import { useSearchParams } from 'next/navigation'
import { useFollowerListQuery } from '@/hooks/queries/follow'
import { FollowerType } from '@/types/api/follow'
import { EmptyList } from '@/components'
import FollowerItem from './FollowerItem'
import UserSvg from '@/assets/svgs/user.svg'

export default function FollowerList() {
    const { data: followerList, isPending } = useFollowerListQuery()

    const searchParams = useSearchParams()
    const selectedTab =
        (searchParams.get('tab') as Exclude<FollowerType, 'all'>) || 'following'

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-point">
            {!isPending && followerList[selectedTab].length === 0 && (
                <EmptyList
                    Icon={UserSvg}
                    text={`${selectedTab === 'following' ? '내가 구독중인 사용자' : '나를 구독중인 사용자'} 목록이 비어있습니다.`}
                />
            )}
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
