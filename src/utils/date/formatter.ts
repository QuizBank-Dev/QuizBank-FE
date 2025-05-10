import { Dayjs } from 'dayjs'
import dayjs from '.'

export const getRelativeTime = (target: Dayjs | Date | string): string => {
    if (!dayjs(target).isValid()) {
        throw new Error('날짜 형식이 잘못되었습니다.')
    }

    if (dayjs(target).isAfter(dayjs())) {
        return '방금 전'
    }

    return dayjs.duration(dayjs(target).diff(dayjs())).humanize(true)
}
