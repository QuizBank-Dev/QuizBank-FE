'use client'

import Notification from '@/assets/svgs/notification.svg'
import User from '@/assets/svgs/user.svg'
import { useRouter } from 'next/navigation'

export default function UserMenu() {
    // 추후 인증 로직 추가 및 조건부 랜더링

    const router = useRouter()

    return (
        <div className="flex items-center gap-4">
            <button
                className="btn-outline btn-pc-lg"
                onClick={() => router.push('/study-status')}
            >
                학습현황
            </button>
            <Notification
                className="size-6 cursor-pointer"
                onClick={() => router.push('/notification')}
            />
            <User
                className="size-6 cursor-pointer"
                onClick={() => router.push('/my-page')}
            />
        </div>
    )
}
