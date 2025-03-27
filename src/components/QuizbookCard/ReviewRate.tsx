import { useQuizbookCardContext } from '.'
import StarFullSvg from '@/assets/svgs/star-full.svg'

export default function ReviewRate() {
    const { reviewRate, reviewCount } = useQuizbookCardContext()

    if (!reviewCount && reviewCount !== 0) {
        return null
    }

    return (
        <div className="flex items-center text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
            <StarFullSvg className="mr-1 size-5 text-[#FDDD51]" />
            <span>{reviewRate}</span>
            <span className="text-gray-400">({reviewCount})</span>
        </div>
    )
}
