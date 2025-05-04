import { AnnualStudyHeatmap, WeeklyStudyTracker } from '@/components'

const weeklyLog = [
    {
        date: '2025-04-12',
        solvedCount: 2,
    },
    {
        date: '2025-04-13',
        solvedCount: 2,
    },
    {
        date: '2025-04-14',
        solvedCount: 2,
    },
    {
        date: '2025-04-15',
        solvedCount: 2,
    },
]

export default function StudyLog() {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-mobile-body-md font-semi-bold text-gray-600 md:text-pc-body-md">
                학습 현황
            </p>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[minmax(0,778px)]">
                    {/* TODO AnnualStudyHeatmap 컴포넌트 수정 이후 확인 */}
                    <AnnualStudyHeatmap />
                </div>
                <WeeklyStudyTracker data={weeklyLog} />
            </div>
        </div>
    )
}
