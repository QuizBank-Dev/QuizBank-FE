import dayjs from 'dayjs'

/**
 * 특정 날짜가 오늘보다 이전인지 확인
 * @param date 비교할 날짜
 * @returns 오늘보다 이전이면 true, 아니면 false
 */
export function isPast(date: Date | string): boolean {
    return dayjs(date).isBefore(dayjs(), 'day')
}
