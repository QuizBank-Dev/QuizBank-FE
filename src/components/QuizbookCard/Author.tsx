'use client'

import Link from 'next/link'
import { ProfileImage } from '@/components'
import { useQuizbookCardContext } from './QuizbookCardContext'

export default function Author() {
    const { author } = useQuizbookCardContext()

    if (!author) {
        return null
    }

    return (
        <Link
            href={`/user/${author._id}`}
            className="flex items-center gap-1.5"
        >
            <ProfileImage size={32} profileImg={author.profileImg} />
            <span className="text-mobile-body-md font-regular text-gray-500 md:text-pc-body-md">
                {author.nickname}
            </span>
        </Link>
    )
}
