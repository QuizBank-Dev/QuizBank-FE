'use client'

import { useQuizbookCardContext } from './QuizbookCardContext'

export default function Description() {
    const { description } = useQuizbookCardContext()
    return (
        <div className="line-clamp-2 text-mobile-body-md font-regular text-gray-600 md:text-pc-body-md">
            {description}
        </div>
    )
}
