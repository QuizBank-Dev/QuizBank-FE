'use client'

import { useQuizbookCardContext } from './QuizbookCardContext'
import UserSvg from '@/assets/svgs/user.svg'

export default function SolvedRate() {
    const { solvedScore, solvedCount } = useQuizbookCardContext()

    if (!solvedCount && solvedCount !== 0) {
        return null
    }

    return (
        <div className="flex items-center text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
            <UserSvg className="mr-1 size-5 text-point-200" />
            <span>{((solvedScore || 0) / solvedCount).toFixed(1)}%</span>
            <span className="text-gray-400">({solvedCount})</span>
        </div>
    )
}
