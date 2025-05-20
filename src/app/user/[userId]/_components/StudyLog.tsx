'use client'

import { useParams } from 'next/navigation'
import { AnnualStudyHeatmap, WeeklyStudyTracker } from '@/components'

export default function StudyLog() {
    const { userId } = useParams<{ userId: string }>()

    return (
        <div className="flex flex-col gap-2">
            <p className="text-mobile-body-md font-semi-bold text-gray-600 md:text-pc-body-md">
                학습 현황
            </p>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[minmax(0,778px)]">
                    <AnnualStudyHeatmap targetUserId={userId} />
                </div>
                <WeeklyStudyTracker targetUserId={userId} />
            </div>
        </div>
    )
}
