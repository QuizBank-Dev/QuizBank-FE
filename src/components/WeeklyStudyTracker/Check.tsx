import clsx from 'clsx'

interface Props {
    checked?: boolean
    disabled?: boolean
}

export default function Check({ checked, disabled }: Props) {
    return (
        <div
            className={clsx(
                'flex aspect-square w-full max-w-16 items-center justify-center rounded-full bg-gray-100 text-point-500',
                checked && '!bg-point-100',
                disabled && 'opacity-40',
            )}
        >
            {checked && (
                <svg
                    className="size-1/2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.6663 5L7.49967 14.1667L3.33301 10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    )
}
