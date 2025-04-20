import { useGroupCardContext } from './GroupCardContext'
import Comment from '@/assets/svgs/comment.svg'

export default function MessageCount() {
    const { chatRoom } = useGroupCardContext()

    if (!chatRoom) {
        return null
    }

    return (
        <div className="inline-flex items-center gap-2 rounded-full bg-point-500 p-2 text-point-50 md:px-4">
            <Comment className="size-4" />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {200}
            </span>
        </div>
    )
}
