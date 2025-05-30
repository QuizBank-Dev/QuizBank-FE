'use client'

import CheckSvg from '@/assets/svgs/check.svg'
import clsx from 'clsx'

interface Props {
    idx: number
    content: string
    onClick: () => void
    isSolved: boolean
    curIdx: number
}

export default function QuizListItem({
    idx,
    content,
    onClick,
    isSolved,
    curIdx,
}: Props) {
    return (
        <li
            onClick={onClick}
            className={clsx(
                'flex cursor-pointer items-center gap-[16px] p-[16px]',
                {
                    'bg-point-100': curIdx === idx,
                },
                'hover:bg-point-100 active:bg-point-100',
            )}
        >
            <CheckSvg
                className={clsx('size-6 text-gray-500 md:size-8', {
                    'text-point-500': isSolved,
                })}
            />
            <div className="flex flex-1 items-center gap-[4px] text-mobile-body-md md:text-pc-body-sm">
                <span className="font-semi-bold">{idx}.</span>
                <span
                    style={{ overflowWrap: 'anywhere' }}
                    className="line-clamp-1 flex-1"
                >
                    {content}
                </span>
            </div>
        </li>
    )
}
