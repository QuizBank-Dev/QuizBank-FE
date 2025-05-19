interface Props {
    Icon: React.FC<{ className?: string }>
}

export default function EmptyList({ Icon }: Props) {
    return (
        <div className="flex select-none flex-col items-center gap-4 py-12">
            <Icon className="size-24 text-gray-300 md:size-32" />
            <p className="text-mobile-body-lg text-gray-400 md:text-pc-body-lg">
                검색 결과가 존재하지 않습니다.
            </p>
        </div>
    )
}
