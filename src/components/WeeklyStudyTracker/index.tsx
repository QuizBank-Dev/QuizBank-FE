'use client'

import { useMemo, useState } from 'react'
import dayjs from '@/utils/date'
import WeekNavigator from './WeekNavigator'
import DayTracker from './DayTracker'

interface Props {
    data: { date: string; solvedCount: number }[]
}

export default function WeeklyStudyTracker({ data }: Props) {
    const [target, setTarget] = useState(dayjs().startOf('isoWeek'))
    // target을 기준으로 일주일 Array로 저장
    const days = useMemo(
        () => Array.from({ length: 7 }).map((_, idx) => target.add(idx, 'day')),
        [target],
    )

    const hasThisDate = (target: string) => {
        return data
            .reduce((arr: string[], { date }) => [...arr, date], [])
            .includes(target)
    }
    const handlePrevWeek = () => {
        setTarget(target.subtract(1, 'week'))
    }
    const handleNextWeek = () => {
        setTarget(target.add(1, 'week'))
    }

    return (
        <article className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-point md:px-8 md:pb-8">
            <div className="flex items-center justify-between">
                <h3 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    주간 학습
                </h3>
                <WeekNavigator
                    target={target}
                    onPrev={handlePrevWeek}
                    onNext={handleNextWeek}
                    disabled={target.isoWeek() === dayjs().isoWeek()}
                />
            </div>
            <div className="flex gap-4">
                {days.map((day) => (
                    <DayTracker
                        key={day.format('WEEKLY_YYYY-MM-DD')}
                        target={day}
                        completed={hasThisDate(day.format('YYYY-MM-DD'))}
                    />
                ))}
            </div>
        </article>
    )
}
