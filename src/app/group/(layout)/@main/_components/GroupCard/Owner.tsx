import { ProfileImage } from '@/components'
import { useGroupCardContext } from './GroupCardContext'

export default function Owner() {
    const { admin } = useGroupCardContext()

    if (!admin) {
        return null
    }

    return (
        <div className="flex cursor-pointer items-center gap-2 md:gap-4">
            <ProfileImage size={32} profileImg={admin.profileImg} />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {admin.nickname}
            </span>
        </div>
    )
}
