'use client'

import LeftArrow from '@/assets/svgs/left-arrow.svg'
import { useRouter } from 'next/navigation'

interface Prop {
    backBtn?: boolean
    path?: string
}

export default function BackBtn({ backBtn, path }: Prop) {
    const router = useRouter()

    return (
        <div className="w-16">
            {backBtn && (
                <LeftArrow
                    className="size-6 cursor-pointer"
                    onClick={() => {
                        if (path) router.push(path)
                        else router.back()
                    }}
                />
            )}
        </div>
    )
}
