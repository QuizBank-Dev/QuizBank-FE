import { getMyBadges } from '@/utils/badge'

interface Props {
    experience: number
}

export default function BadgeList({ experience }: Props) {
    const badgeList = getMyBadges(experience)

    return (
        <div className="flex items-center justify-center gap-1">
            {badgeList.length === 0 && (
                <p className="select-none py-2 text-mobile-body-sm text-gray-300 md:text-pc-body-sm">
                    뱃지가 존재하지 않습니다.
                </p>
            )}
            {badgeList.slice(0, 4).map(({ Icon }, idx) => (
                <Icon
                    key={`badge_${idx}`}
                    className="size-12 rounded-full bg-point-50 p-1"
                />
            ))}
        </div>
    )
}
