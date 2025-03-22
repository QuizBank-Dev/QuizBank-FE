// SVG
import LeftArrowSvg from '@/assets/svgs/left-arrow.svg'
import RightArrowSvg from '@/assets/svgs/right-arrow.svg'

interface YearNavigatorProps {
    year: number
    onPrev: () => void
    onNext: () => void
    disabled: boolean
}

export default function YearNavigator({
    year,
    onPrev,
    onNext,
    disabled,
}: YearNavigatorProps) {
    return (
        <div className="flex items-center gap-[8px] text-gray-900">
            <button onClick={onPrev}>
                <LeftArrowSvg className="h-[20px] w-[20px]" />
            </button>
            <p className="text-mobile-body-sm font-regular md:text-pc-body-sm">
                {year}
            </p>
            <button
                disabled={disabled}
                onClick={onNext}
                className="disabled:cursor-not-allowed disabled:text-gray-400"
            >
                <RightArrowSvg className="h-[20px] w-[20px]" />
            </button>
        </div>
    )
}
