import { useGroupCardContext } from './GroupCardContext'
import User from '@/assets/svgs/user.svg'

export default function MemberCount() {
    const { memberCount } = useGroupCardContext()

    if (!memberCount) {
        return null
    }

    return (
        <div className="flex items-center gap-1">
            <User className="size-4 text-point-200 md:size-5" />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {memberCount}
            </span>
        </div>
    )
}
