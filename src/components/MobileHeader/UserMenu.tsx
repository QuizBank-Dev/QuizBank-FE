'use client'

import LoginIcon from '@/assets/svgs/login.svg'
import NotificationIcon from '@/assets/svgs/notification.svg'
import UserIcon from '@/assets/svgs/user.svg'
import { useCurrentUser } from '@/hooks/queries'
import { useRouter } from 'next/navigation'
import LoopAnimation from '../LoopAnimation'

export default function UserMenu() {
    const { data: user, isLoading } = useCurrentUser()

    const router = useRouter()

    if (!user)
        return (
            <>
                {isLoading ? (
                    <div className="size-6 animate-spin">
                        <LoopAnimation />
                    </div>
                ) : (
                    <LoginIcon
                        className="size-6 cursor-pointer"
                        onClick={() => router.push('/login')}
                    />
                )}
            </>
        )

    return (
        <>
            <NotificationIcon
                className="size-6 cursor-pointer"
                onClick={() => router.push('/notification')}
            />
            <UserIcon
                className="size-6 cursor-pointer"
                onClick={() => router.push('/my-page')}
            />
        </>
    )
}
