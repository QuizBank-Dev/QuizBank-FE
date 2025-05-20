'use client'

import { getMyBadges } from '@/utils/badge'
import { useCurrentUser } from '@/hooks/queries/user'
import { EmptyList } from '@/components'
import BadgeItem from './BadgeItem'
import BadgeSvg from '@/assets/svgs/badge.svg'

export default function BadgeList() {
    const { data: user } = useCurrentUser()

    const badges = getMyBadges(user?.experience || 0)

    return (
        <ul className="flex flex-col">
            {badges.length === 0 && (
                <EmptyList Icon={BadgeSvg} text="보유한 뱃지가 없습니다." />
            )}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
        </ul>
    )
}
