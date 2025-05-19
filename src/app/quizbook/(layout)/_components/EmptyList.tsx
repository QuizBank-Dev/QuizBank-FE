import QuizbookSvg from '@/assets/svgs/quizbook.svg'

export default function EmptyList() {
    return (
        <div className="flex select-none flex-col items-center gap-4 py-12">
            <QuizbookSvg className="size-24 text-gray-300 md:size-32" />
            <p className="text-mobile-body-lg md:text-pc-body-lg">
                검색 결과가 존재하지 않습니다.
            </p>
        </div>
    )
}
