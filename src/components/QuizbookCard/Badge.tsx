import clsx from 'clsx'

type BadgeStatus = '학습전' | '학습중' | '학습완료'

interface Props {
    status: BadgeStatus
    customText?: string
}

export default function Badge({ status, customText }: Props) {
    //
    return (
        <div
            className={clsx(
                'flex shrink-0 justify-center rounded-full px-4 py-2 text-mobile-body-sm/[unset] font-semi-bold text-white md:text-pc-body-sm/[unset]',
                status === '학습전'
                    ? 'bg-gray-300'
                    : status === '학습중'
                      ? 'bg-danger-300'
                      : 'bg-point-500',
            )}
        >
            {customText || status}
        </div>
    )
}
