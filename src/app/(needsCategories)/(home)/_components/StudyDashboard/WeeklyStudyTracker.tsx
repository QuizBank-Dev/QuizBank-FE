import { WeeklyStudyTracker as Tracker } from '@/components'
import WeekNavigator from '@/components/WeeklyStudyTracker/WeekNavigator'
import DayTracker from '@/components/WeeklyStudyTracker/DayTracker'
import dayjs from '@/utils/date'

interface Props {
    loginUser: unknown
}

export default function WeeklyStudyTracker({ loginUser }: Props) {
    if (!!loginUser) {
        return <Tracker />
    }

    return (
        <article className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-point md:px-8 md:pb-8">
            <div className="flex items-center justify-between">
                <h3 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    주간 학습
                </h3>
                <WeekNavigator
                    target={dayjs()}
                    onPrev={() => {}}
                    onNext={() => {}}
                />
            </div>
            <div className="flex gap-4">
                {Array.from({ length: 7 })
                    .map((_, idx) => dayjs().add(idx, 'day'))
                    .map((day) => (
                        <DayTracker
                            key={day.format('WEEKLY_YYYY-MM-DD')}
                            target={day}
                            completed={false}
                        />
                    ))}
            </div>
        </article>
    )
}
