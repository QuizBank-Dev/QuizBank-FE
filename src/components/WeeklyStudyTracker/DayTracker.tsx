import { Dayjs } from 'dayjs'
import clsx from 'clsx'
import Check from './Check'

interface Props {
    target: Dayjs
    completed?: boolean
}

export default function DayTracker({ target, completed }: Props) {
    const isToday = target.isSame(undefined, 'day')

    return (
        <div className="flex flex-1 flex-col items-center gap-1 text-mobile-body-md md:text-pc-body-md">
            <div
                className={clsx(
                    'rounded-full px-1.5 text-gray-400 md:px-2',
                    isToday && 'bg-point-500 text-white',
                )}
            >
                {target.format('ddd')}
            </div>
            <Check checked={completed} disabled={target.isAfter()} />
        </div>
    )
}
