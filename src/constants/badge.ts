import UserSvg from '@/assets/svgs/user.svg'

export const Badges: Record<
    // 필요 경험치
    string,
    // 뱃지 정보
    {
        Icon: React.FC<{ className?: string }>
        title: string
        description: string
    }
> = {
    '500': { Icon: UserSvg, title: '뱃지1', description: '뱃지1' },
    '1000': { Icon: UserSvg, title: '뱃지2', description: '뱃지2' },
    '2500': { Icon: UserSvg, title: '뱃지3', description: '뱃지3' },
    '5000': { Icon: UserSvg, title: '뱃지4', description: '뱃지4' },
    '10000': { Icon: UserSvg, title: '뱃지5', description: '뱃지5' },
}
