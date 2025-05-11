'use client'

import clsx from 'clsx'

interface Props {
    optionList: string[]
    value?: string
    onChange: (answer: string) => void
}

export default function MultipleAnswerInput({
    optionList,
    value,
    onChange,
}: Props) {
    return (
        <div className="flex flex-1 flex-col justify-center gap-[8px] md:gap-[10px]">
            {optionList.map((opt, idx) => (
                <button
                    key={`option-${idx}`}
                    className={clsx(
                        'flex w-full items-center gap-[8px] rounded-lg border-2 px-[16px] py-[8px] md:px-[32px] md:py-[16px]',
                        opt === value ? 'border-point-500' : 'border-gray-200',
                        'hover:bg-point-50 active:bg-point-50',
                    )}
                    onClick={() => onChange(opt)}
                >
                    <span className="w-[16px] text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                        {idx + 1}.
                    </span>
                    <span className="text-mobile-body-md md:text-pc-body-md">
                        {opt}
                    </span>
                </button>
            ))}
        </div>
    )
}
