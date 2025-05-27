import { BADGE_DATA, Badges } from '@/constants/badge'

export const getMyBadges = (exp: number) => {
    const badgeKeys = Object.keys(Badges).filter(
        (key: string) => parseInt(key) <= exp,
    )
    return badgeKeys.map((key) => Badges[key])
}

/**
 * 뱃지 리스트 가져오기
 */
export const getBadgesStatus = (xp: number) => {
    return BADGE_DATA.map((badge) => ({
        ...badge,
        unlocked: xp >= badge.xp,
    }))
}

/**
 * 다음 뱃지 정보
 */
export const getNextBadge = (xp: number) => {
    return BADGE_DATA.find((badge) => xp < badge.xp) ?? null
}

/**
 * 누적 경험치 / 다음 단계의 경험치
 */
export const getXpProgress = (xp: number) => {
    if (xp < 0) xp = 0

    const thresholds = BADGE_DATA.map((b) => b.xp)
    const maxXp = thresholds.at(-1) ?? 1

    const nextLevelXp = thresholds.find((t) => xp < t) ?? maxXp

    const current = Math.min(xp, maxXp)
    const total = nextLevelXp

    return {
        current,
        total,
    }
}
