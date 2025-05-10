import { Badges } from '@/constants/badge'

export const getMyBadges = (exp: number) => {
    const badgeKeys = Object.keys(Badges).filter(
        (key: string) => parseInt(key) <= exp,
    )
    return badgeKeys.map((key) => Badges[key])
}
