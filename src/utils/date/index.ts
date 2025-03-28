import dayjs from 'dayjs'

// plugin
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)

// locale
import 'dayjs/locale/ko'
dayjs.locale('ko')

export default dayjs
