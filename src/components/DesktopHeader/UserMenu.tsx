'use client'

import Notification from '@/assets/svgs/notification.svg'
import User from '@/assets/svgs/user.svg'
import { useCurrentUser } from '@/hooks/queries/user'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LoopAnimation from '../LoopAnimation'

export default function UserMenu() {
    const { data: user, isLoading } = useCurrentUser()

    const router = useRouter()

    if (!user)
        return (
            <button
                className={clsx(
                    'btn-solid btn-pc-lg',
                    isLoading && 'btn-loading',
                )}
                disabled={isLoading}
                onClick={() => router.push('/login')}
            >
                {isLoading && <LoopAnimation />}
                {isLoading ? 'Loading...' : '로그인'}
            </button>
        )

    return (
        <div className="flex items-center gap-4">
            <Link className="btn-outline btn-pc-lg" href={'/study-status'}>
                학습현황
            </Link>
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
