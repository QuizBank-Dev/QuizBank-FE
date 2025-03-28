import clsx from 'clsx'
import {
    QuizbookCardStatus,
    StatusColor,
} from '@/constants/common/quizbookBadge'

interface Props {
    status: QuizbookCardStatus
    customText?: string
}

export default function Badge({ status, customText }: Props) {
    return (
        <div
            className={clsx(
                'flex shrink-0 justify-center rounded-full px-4 py-2 text-mobile-body-sm/[unset] font-semi-bold text-white md:text-pc-body-sm/[unset]',
                StatusColor[status],
            )}
        >
            {customText || status}
        </div>
    )
}
