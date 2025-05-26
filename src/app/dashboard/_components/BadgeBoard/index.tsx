'use client'

import TopArrowSvg from '@/assets/svgs/top-arrow.svg'

import { DonutProgressbar } from '@/components/study'
import { useCurrentUser } from '@/hooks/queries/user'
import { getBadgesStatus, getNextBadge, getXpProgress } from '@/utils/badge'
import Badge from './Badge'
import clsx from 'clsx'

interface Props {
    className?: string
}

export default function BadgeBoard({ className }: Props) {
    const { data: user } = useCurrentUser()
    const badgeList = getBadgesStatus(user?.experience || 0)
    const { current, total } = getXpProgress(user?.experience || 0)
    const nextBadge = getNextBadge(user?.experience || 0)

    return (
        <div
            className={clsx(
                'flex flex-col gap-[16px] rounded-lg bg-white p-[16px] shadow-point md:px-[32px] md:pt-[16px]',
                className,
            )}
        >
            <h3 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">{`다음 뱃지 까지 Let's 기릿!`}</h3>
            <div className="flex flex-1 flex-col divide-y-1 divide-gray-200">
                {/* 정보 영역 */}
                <div className="flex flex-1 items-center justify-center gap-[16px] pb-[16px]">
                    <DonutProgressbar ratio={current / total}>
                        <Badge
                            unlocked={true}
                            label={nextBadge?.label || ''}
                            imageUrl={nextBadge?.imageUrl || ''}
                        />
                    </DonutProgressbar>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center gap-[4px] text-mobile-body-md text-gray-400 md:text-pc-body-md">
                            <span className="font-semi-bold text-point-500">
                                {current}
                            </span>
                            <span>/</span>
                            <span>{total}</span>
                            <span className="font-semi-bold">xp</span>
                        </div>
                        <div className="flex animate-bounce items-center text-mobile-body-sm text-point-200 md:text-pc-body-sm">
                            <span>NEXT LEVEL</span>
                            <TopArrowSvg className="h-[15px] w-[15px]" />
                        </div>
                    </div>
                </div>
                {/* 뱃지 영역 */}
                <div className="flex items-center justify-around gap-[16px] overflow-x-auto pt-[16px]">
                    {badgeList.map((badge) => (
                        <Badge
                            key={badge.id}
                            unlocked={badge.unlocked}
                            label={badge.label}
                            imageUrl={badge.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
