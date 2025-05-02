'use client'

import LeftArrowIcon from '@/assets/svgs/left-arrow.svg'
import { useRouter } from 'next/navigation'

export default function BackBtn() {
    const router = useRouter()

    return (
        <LeftArrowIcon
            className="size-6 cursor-pointer"
            onClick={() => router.back()}
        />
    )
}
