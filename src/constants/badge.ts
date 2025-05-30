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

export const BADGE_DATA = [
    {
        id: 'badge_lv_1',
        xp: 1000,
        label: '뱃지1',
        imageUrl: '/badges/badge_lv_1.png',
        description: '첫 번째 도전을 성공적으로 완수했어요!',
    },
    {
        id: 'badge_lv_2',
        xp: 2500,
        label: '뱃지2',
        imageUrl: '/badges/badge_lv_2.png',
        description: '꾸준한 노력이 멋진 결과로 이어졌습니다.',
    },
    {
        id: 'badge_lv_3',
        xp: 5000,
        label: '뱃지3',
        imageUrl: '/badges/badge_lv_3.png',
        description: '당신의 열정과 성장이 이 뱃지를 만들었습니다.',
    },
    {
        id: 'badge_lv_4',
        xp: 10000,
        label: '뱃지4',
        imageUrl: '/badges/badge_lv_4.png',
        description: '성실함이 결국 빛을 발했어요! 이 뱃지는 그 증거입니다.',
    },
]
