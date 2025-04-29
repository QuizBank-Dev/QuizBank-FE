import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
    label?: string
    area?: boolean
}

export default function AddedQuizField({
    label,
    children,
    area = false,
    className = '',
}: Props) {
    return (
        <div className="flex w-full flex-col items-start gap-1">
            {label && (
                <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                    {label}
                </span>
            )}
            <div
                className={clsx(
                    'w-full rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-mobile-body-md font-regular text-gray-900 md:text-pc-body-md',
                    area && 'custom-scrollbar min-h-[120px]',
                    className,
                )}
            >
                {children}
            </div>
        </div>
    )
}
