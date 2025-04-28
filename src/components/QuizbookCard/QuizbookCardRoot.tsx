'use client'

import { ComponentProps } from 'react'
import clsx from 'clsx'
import {
    QuizbookCardContext,
    QuizbookCardContextProps,
} from './QuizbookCardContext'

// 하위 컴포넌트
import Badge from './Badge'

interface Props {
    id: string
    category: string
    title: string
    badge?: ComponentProps<typeof Badge>
    onClick?: () => void
    children?: React.ReactNode
    className?: string
}

export default function QuizbookCardRoot({
    id,
    category,
    title,
    badge,
    onClick,
    children,
    className,
    ...props
}: Props & QuizbookCardContextProps) {
    const handleQuizbookCardClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <QuizbookCardContext.Provider value={{ id, category, title, ...props }}>
            <div
                className={clsx(
                    'flex flex-col items-start gap-2 rounded-lg bg-white p-4 shadow-point hover:bg-gray-100',
                    className,
                )}
            >
                <div className="flex w-full gap-1">
                    <div className="flex-1">
                        <div className="text-mobile-caption font-regular text-point-500 md:text-pc-caption">
                            {category}
                        </div>
                        <div
                            className="line-clamp-1 cursor-pointer text-mobile-body-lg font-semi-bold md:text-pc-body-lg"
                            onClick={handleQuizbookCardClick}
                        >
                            {title}
                        </div>
                    </div>
                    {badge && <Badge {...badge} />}
                </div>
                {children}
            </div>
        </QuizbookCardContext.Provider>
    )
}

// QuizbookCard.Description = Description
// QuizbookCard.Author = Author
// QuizbookCard.SolvedRate = SolvedRate
// QuizbookCard.ReviewRate = ReviewRate
// QuizbookCard.QuizCount = QuizCount
// QuizbookCard.LikeButton = LikeButton
