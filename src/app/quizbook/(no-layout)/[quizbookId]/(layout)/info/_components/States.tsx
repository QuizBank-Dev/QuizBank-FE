'use client'

import StarFullIcon from '@/assets/svgs/star-full.svg'
import UserIcon from '@/assets/svgs/user.svg'
import { useQuizbookStates } from '@/hooks/queries/quizbook'
import { useParams } from 'next/navigation'

export default function States() {
    const { quizbookId } = useParams()
    const { data } = useQuizbookStates(quizbookId as string)

    return (
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
                <StarFullIcon className="size-5 text-[#FDDD51] md:size-6" />
                {`${data ? data.reviewRating : '--'} (후기 ${data ? data.reviewCount.toLocaleString('en-US') : '--'}개)`}
            </div>
            <div className="flex items-center gap-2">
                <UserIcon className="size-5 md:size-6" />
                {`${data ? ((data.solvedScore / (data.solvedCount * data.totalScore)) * 100).toFixed(1) : '--'}% (학습자 ${data ? data.solvedCount.toLocaleString('en-US') : '--'}명)`}
            </div>
        </div>
    )
}
