interface Props {
    Icon: React.FC<{ className?: string }>
    title: string
    description: string
}

export default function BadgeItem({ Icon, title, description }: Props) {
    return (
        <div className="flex gap-4 p-2 hover:bg-gray-50">
            <div className="flex items-center justify-center rounded-lg bg-point-50 p-1 md:p-2">
                <Icon className="size-8 md:size-12" />
            </div>
            <div>
                <p className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                    {title}
                </p>
                <p className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}
