import { getMyBadges } from '@/utils/badge'
import BadgeItem from './BadgeItem'

export default function BadgeList() {
    const badges = getMyBadges(3000)

    return (
        <ul className="flex flex-col">
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
            {badges.map((badge) => (
                <BadgeItem key={badge.title} {...badge} />
            ))}
        </ul>
    )
}
