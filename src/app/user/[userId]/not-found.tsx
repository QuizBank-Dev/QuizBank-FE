'use client'

import { useRouter } from 'next/navigation'
import UserSvg from '@/assets/svgs/user.svg'
import MobileHeader from '@/components/MobileHeader'

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <>
            <MobileHeader title="" backBtn />
            <div className="mb-12 flex h-full w-full flex-col items-center justify-center gap-4">
                <UserSvg className="w-32 text-gray-300" />
                <p className="text-mobile-body-lg md:text-pc-body-lg">
                    해당 사용자를 찾을 수 없습니다.
                </p>
                <button
                    className="btn-outline btn-mobile-sm md:btn-pc-sm"
                    onClick={() => router.back()}
                >
                    뒤로가기
                </button>
            </div>
        </>
    )
}
