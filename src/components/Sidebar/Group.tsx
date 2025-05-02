import clsx from 'clsx'

interface Prop {
    children: React.ReactNode
    className?: string
}

export default function Group({ children, className }: Prop) {
    return (
        <div
            className={clsx(
                'flex w-full flex-col overflow-hidden rounded-lg bg-white',
                className,
            )}
        >
            {children}
        </div>
    )
}
