import { useGroupCardContext } from './GroupCardContext'
import RightArrow from '@/assets/svgs/right-arrow.svg'

export default function ApplyBtn() {
    const { chatRoom } = useGroupCardContext()

    if (chatRoom) {
        return <div></div>
    }

    return (
        <div className="flex cursor-pointer items-center gap-[6px] text-point-500">
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                가입 신청하기
            </span>
            <RightArrow className="size-5 md:size-6" />
        </div>
    )
}
