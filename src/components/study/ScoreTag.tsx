import clsx from 'clsx'
import { TypeToColor, TypeToXp } from '@/constants/quiz'
import { QuizType } from '@/types/quiz'

// SVG
import PlusSvg from '@/assets/svgs/plus.svg'

interface ScoreTagProps {
    type: QuizType
}

export default function ScoreTag({ type }: ScoreTagProps) {
    const xp = TypeToXp[type]

    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-lg bg-point-50 px-[8px] py-[4px] text-mobile-body-sm font-semi-bold md:text-pc-body-sm',
                TypeToColor[type],
            )}
        >
            <PlusSvg
                className={clsx(
                    'h-[15px] w-[15px] md:h-[20px] md:w-[20px]',
                    TypeToColor[type],
                )}
            />
            {xp}xp
        </span>
    )
}
