'use client'

import Notification from '@/assets/svgs/notification.svg'
import User from '@/assets/svgs/user.svg'
import { useRouter } from 'next/navigation'

export default function UserMenu() {
    // 추후 인증 로직 추가 및 조건부 랜더링

    const router = useRouter()

    return (
        <div className="flex items-center justify-end gap-4">
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
