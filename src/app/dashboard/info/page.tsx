import { AnnualStudyHeatmap, WeeklyStudyTracker } from '@/components'
import { BadgeBoard, RecentStudyBoard } from '../_components'

export default function Page() {
    return (
        <section className="flex flex-col gap-[16px]">
            <h2 className="hidden text-mobile-title-sm font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                학습현황
            </h2>
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[16px] lg:flex-row">
                    <BadgeBoard className="lg:order-2" />
                    <div className="grid min-w-0 flex-1 grid-rows-[1fr_1fr] gap-[16px]">
                        <RecentStudyBoard />
                        <WeeklyStudyTracker />
                    </div>
                </div>
                <AnnualStudyHeatmap />
            </div>
        </section>
    )
}
