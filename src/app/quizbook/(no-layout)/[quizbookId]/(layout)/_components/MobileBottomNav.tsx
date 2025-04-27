'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import ShareIcon from '@/assets/svgs/share.svg'

export default function MobileBottomNav() {
    // 추후 인증 로직 필요

    return (
        <nav className="flex w-full items-center justify-between bg-white px-4 py-3 md:hidden">
            <div className="flex items-center gap-2">
                <button className="btn-solid btn-mobile-sm">시작하기</button>
                <button className="btn-solid btn-mobile-sm">해설</button>
                <button className="btn-solid btn-mobile-sm">그룹에 추가</button>
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
