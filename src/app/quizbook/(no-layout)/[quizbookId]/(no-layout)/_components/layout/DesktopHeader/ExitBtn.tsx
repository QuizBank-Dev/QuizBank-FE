'use client'

import ExitSvg from '@/assets/svgs/exit.svg'
import { useRouter } from 'next/navigation'

export default function ExitBtn() {
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className="btn-outline btn-pc-md flex gap-[8px]"
        >
            <ExitSvg className="h-[20px] w-[20px]" />
            나가기
        </button>
    )
}
