'use client'

import LeftArrow from '@/assets/svgs/left-arrow.svg'
import { useRouter } from 'next/navigation'

interface Prop {
    backBtn?: boolean
}

export default function BackBtn({ backBtn }: Prop) {
    const router = useRouter()

    return (
        <div className="w-16">
            {backBtn && (
                <LeftArrow
                    className="size-6 cursor-pointer"
                    onClick={() => router.back()}
                />
            )}
        </div>
    )
}
