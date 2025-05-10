import dayjs from 'dayjs'

// plugin
import isoWeek from 'dayjs/plugin/isoWeek'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(isoWeek)
dayjs.extend(duration)
dayjs.extend(relativeTime)

// locale
import 'dayjs/locale/ko'
dayjs.locale('ko')

export default dayjs
