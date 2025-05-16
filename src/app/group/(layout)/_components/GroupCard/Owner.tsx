import { ProfileImage } from '@/components'
import { useGroupCardContext } from './GroupCardContext'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/queries/user'

export default function Owner() {
    const { admin } = useGroupCardContext()
    const { data: userData } = useCurrentUser()

    if (!admin || !userData) {
        return null
    }

    return (
        <Link
            className="flex cursor-pointer items-center gap-2 md:gap-4"
            href={
                admin._id === userData?._id
                    ? '/my-page/info'
                    : `/user/${admin._id}`
            }
        >
            <ProfileImage size={32} profileImg={admin.profileImg} />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {admin.nickname}
            </span>
        </Link>
    )
}
