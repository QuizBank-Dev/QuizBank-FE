'use client'

import { useQuizbookCardContext } from './QuizbookCardContext'

export default function Author() {
    const { author } = useQuizbookCardContext()

    if (!author) {
        return null
    }

    return (
        <div className="flex items-center gap-1.5">
            {/* TODO 프로필사진 컴포넌트로 업데이트 필요 (author.profileImg) */}
            <div className="size-8 rounded-full bg-gray-300" />
            <span className="text-mobile-body-md font-regular text-gray-500 md:text-pc-body-md">
                {author.nickname}
            </span>
        </div>
    )
}
