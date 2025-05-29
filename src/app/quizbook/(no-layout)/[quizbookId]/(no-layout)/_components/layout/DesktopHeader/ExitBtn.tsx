'use client'

import ExitSvg from '@/assets/svgs/exit.svg'
import { useRouter } from 'next/navigation'

interface Props {
    path?: string
}

export default function ExitBtn({ path }: Props) {
    const router = useRouter()

    return (
        <button
            onClick={() => {
                if (path) router.push(path)
                else router.back()
            }}
            className="btn-outline btn-pc-md flex gap-[8px]"
        >
            <ExitSvg className="h-[20px] w-[20px]" />
            나가기
        </button>
    )
}
