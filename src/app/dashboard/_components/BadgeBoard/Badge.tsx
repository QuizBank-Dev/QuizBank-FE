import LockedSvg from '@/assets/svgs/locked.svg'

import { ProfileImage } from '@/components'

interface Props {
    unlocked: boolean
    label: string
    imageUrl: string
}

export default function Badge({ unlocked, label, imageUrl }: Props) {
    return (
        <div className="relative h-[60px] w-[60px]">
            <ProfileImage size={60} profileImg={imageUrl} alt={label} />
            {!unlocked && (
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-gray-900/70 text-white">
                    <LockedSvg className="size-5" />
                </div>
            )}
        </div>
    )
}
