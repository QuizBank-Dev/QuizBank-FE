import { ProfileImage } from '@/components'

interface Props {
    imageUrl: string
    label: string
    description: string
}

export default function BadgeItem({ label, imageUrl, description }: Props) {
    return (
        <div className="flex items-center gap-4 p-2 hover:bg-gray-50">
            <div className="relative flex items-center justify-center">
                <ProfileImage size={60} profileImg={imageUrl} alt={label} />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                    {label}
                </p>
                <p className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}
