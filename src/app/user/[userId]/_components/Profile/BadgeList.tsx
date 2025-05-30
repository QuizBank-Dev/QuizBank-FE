import { getBadgesStatus } from '@/utils/badge'
import { ProfileImage } from '@/components'

interface Props {
    experience: number
}

export default function BadgeList({ experience }: Props) {
    const badges = getBadgesStatus(experience || 0)
    const unlockBadges = badges.filter((badge) => badge.unlocked)

    return (
        <div className="flex items-center justify-center gap-1">
            {unlockBadges.length === 0 && (
                <p className="select-none py-2 text-mobile-body-sm text-gray-300 md:text-pc-body-sm">
                    뱃지가 존재하지 않습니다.
                </p>
            )}
            {unlockBadges.slice(-4).map(({ id, imageUrl, label }) => (
                <ProfileImage
                    key={id}
                    size={48}
                    profileImg={imageUrl}
                    alt={label}
                />
            ))}
        </div>
    )
}
