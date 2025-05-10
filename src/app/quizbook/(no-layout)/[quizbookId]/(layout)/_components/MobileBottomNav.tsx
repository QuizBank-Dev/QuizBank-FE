'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileBottomNav() {
    const path = usePathname()
    // 추후 인증 로직 필요

    return (
        <nav className="flex w-full items-center justify-between bg-white px-4 py-3 md:hidden">
            <div className="flex items-center gap-2">
                <Link href={`${path}`} className="btn-solid btn-mobile-sm py-3">
                    다시 풀기
                </Link>
                <Link href={`${path}`} className="btn-solid btn-mobile-sm py-3">
                    해설
                </Link>
                <Link
                    href={`${path}/include-group`}
                    className="btn-solid btn-mobile-sm py-3"
                >
                    그룹에 추가
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <button className="btn-outline p-2">
                    <HeartOutlineIcon className="size-4" />
                </button>
                <button className="btn-outline p-2">
                    <ShareIcon className="size-4" />
                </button>
            </div>
        </nav>
    )
}
