'use client'

import { getBadgesStatus } from '@/utils/badge'
import { useCurrentUser } from '@/hooks/queries/user'
import { EmptyList } from '@/components'
import BadgeItem from './BadgeItem'
import BadgeSvg from '@/assets/svgs/badge.svg'

export default function BadgeList() {
    const { data: user } = useCurrentUser()

    const badgeList = getBadgesStatus(user?.experience || 0)
    const unlockBadgeList = badgeList.filter((badge) => badge.unlocked)

    return (
        <div className="flex flex-col">
            {unlockBadgeList.length === 0 && (
                <EmptyList Icon={BadgeSvg} text="보유한 뱃지가 없습니다." />
            )}
            {unlockBadgeList.length !== 0 && (
                <>
                    {unlockBadgeList.map((badge) => (
                        <BadgeItem key={badge.id} {...badge} />
                    ))}
                    {badgeList.length !== unlockBadgeList.length && (
                        <p className="mt-2 self-center rounded-lg bg-point-50/50 px-6 py-2 text-center text-mobile-body-sm font-semi-bold text-gray-600 md:mt-4 md:py-4 md:text-pc-body-sm">
                            문제를 해결하며 성장하고, 더 많은 뱃지를
                            획득해보세요!
                        </p>
                    )}
                </>
            )}
        </div>
    )
}
