'use client'

import clsx from 'clsx'

interface Props {
    value?: string
    onChange: (answer: string) => void
}

export default function OXAnswerInput({ value, onChange }: Props) {
    return (
        <div className="flex w-full flex-1 items-center justify-center gap-[16px]">
            {['O', 'X'].map((opt) => (
                <button
                    key={opt}
                    className={clsx(
                        'flex-1 rounded-lg border-2 text-center text-[64px] font-semi-bold md:text-[128px]',
                        'hover:bg-gray-50 active:bg-gray-50',
                        opt === 'O' ? 'text-point-200' : 'text-danger-300',
                        value?.toUpperCase() === opt
                            ? 'border-point-500'
                            : 'border-gray-200',
                    )}
                    onClick={() => onChange(opt)}
                >
                    {opt}
                </button>
            ))}
        </div>
    )
}
