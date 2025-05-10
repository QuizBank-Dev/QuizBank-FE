type Props = {
    label: string
    text: string
}

export default function InfoItem({ label, text }: Props) {
    return (
        <div className="flex flex-col items-start gap-1 pb-4">
            <span className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                {label}
            </span>
            <span className="whitespace-pre-line text-mobile-body-md font-semi-bold md:text-pc-body-md">
                {text}
            </span>
        </div>
    )
}
