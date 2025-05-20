'use client'

import { getMyBadges } from '@/utils/badge'
import { useCurrentUser } from '@/hooks/queries/user'
import BadgeItem from './BadgeItem'

export default function BadgeList() {
    const { data: user } = useCurrentUser()

    const badges = getMyBadges(user?.experience || 0)

    return (
        <ul className="flex flex-col">
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
        </ul>
    )
}
