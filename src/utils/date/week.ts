import { Dayjs } from 'dayjs'

/**
 * ISO 8601을 기준으로 target이 N월 N주차인지 계산하는 함수
 * @param target 대상 날짜 (월요일)
 */
export const weekOfMonth = (target: Dayjs): string => {
    const thursday = target.day(4)

    let firstThursday = thursday.startOf('month').day(4)
    if (firstThursday.month() !== thursday.month()) {
        firstThursday = firstThursday.add(7, 'day')
    }

    const month = thursday.month()
    const week = Math.ceil(thursday.diff(firstThursday, 'day') / 7) + 1

    return `${month + 1}월 ${week}주차`
}
