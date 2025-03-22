// SVG
import PlusSvg from '@/assets/svgs/plus.svg'
import { TypeToColor, TypeToXp } from '@/constants/common/scoreTag'
import { QuestionType } from '@/types/quiz'

interface ScoreTagProps {
    type: QuestionType
}

export default function ScoreTag({ type }: ScoreTagProps) {
    const xp = TypeToXp[type]
    const color = TypeToColor[type]

    return (
        <span
            className={`bg-point-50 px-[8px] py-[4px] text-mobile-body-sm font-semi-bold ${color} inline-flex items-center rounded-lg md:text-pc-body-sm`}
        >
            <PlusSvg
                className={`h-[15px] w-[15px] ${color} md:h-[20px] md:w-[20px]`}
            />
            {xp}xp
        </span>
    )
}
