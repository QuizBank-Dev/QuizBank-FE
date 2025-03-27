import { ComponentProps, createContext, useContext } from 'react'
import clsx from 'clsx'
import { Quizbook } from '@/types/quizbook'

// 하위 컴포넌트
import Badge from './Badge'
import Description from './Description'
import Author from './Author'
import SolvedRate from './SolvedRate'
import ReviewRate from './ReviewRate'
import QuizCount from './QuizCount'
import LikeButton from './LikeButton'

interface Props {
    id: string
    category: string
    title: string
    badge?: ComponentProps<typeof Badge>
    onClick?: () => void
    children?: React.ReactNode
    className?: string
}

type ContextProps = Partial<Quizbook> & { id: string }

const QuizbookCardContext = createContext<ContextProps | null>(null)

export const useQuizbookCardContext = () => {
    const context = useContext(QuizbookCardContext)
    if (!context) {
        throw new Error('QuizbookCard 하위에 작성되어야하는 컴포넌트입니다.')
    }
    return context
}

export default function QuizbookCard({
    id,
    category,
    title,
    badge,
    onClick,
    children,
    className,
    ...props
}: Props & ContextProps) {
    const handleQuizbookCardClick = () => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <QuizbookCardContext.Provider value={{ id, category, title, ...props }}>
            <div
                className={clsx(
                    'flex cursor-pointer flex-col items-start gap-2 rounded-lg bg-white p-4 shadow-point hover:bg-gray-100',
                    className,
                )}
                onClick={handleQuizbookCardClick}
            >
                <div className="flex w-full gap-1">
                    <div className="flex-1">
                        <div className="text-mobile-caption font-regular text-point-500 md:text-pc-caption">
                            {category}
                        </div>
                        <div className="line-clamp-1 text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
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

QuizbookCard.Description = Description
QuizbookCard.Author = Author
QuizbookCard.SolvedRate = SolvedRate
QuizbookCard.ReviewRate = ReviewRate
QuizbookCard.QuizCount = QuizCount
QuizbookCard.LikeButton = LikeButton
