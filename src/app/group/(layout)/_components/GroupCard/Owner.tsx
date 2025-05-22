import { ProfileImage } from '@/components'
import { useGroupCardContext } from './GroupCardContext'
import Link from 'next/link'

export default function Owner() {
    const { admin } = useGroupCardContext()

    if (!admin) {
        return null
    }

    return (
        <Link
            className="flex cursor-pointer items-center gap-2 md:gap-4"
            href={`/user/${admin._id}`}
        >
            <ProfileImage size={32} profileImg={admin.profileImg} />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {admin.nickname}
            </span>
        </Link>
    )
}
