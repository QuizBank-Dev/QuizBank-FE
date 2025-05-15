import { useEffect, useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ProfileImage } from '@/components'
import { useCurrentUser } from '@/hooks/queries/user'
import { useRouter } from 'next/navigation'

interface Props {
    onClose: () => void
}

export default function ProfileMenu({ onClose }: Props) {
    const profileRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()
    const { data: user } = useCurrentUser()

    const handleLogout = () => {
        // Logout API 호출
        router.push('/login')
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target as Node)
            ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose])

    if (!user) {
        return null
    }

    return (
        <div
            ref={profileRef}
            className={clsx(
                'flex w-full max-w-48 flex-col gap-2 rounded-lg bg-white p-2 shadow-point',
                'absolute right-4 top-4 z-50 md:right-2 lg:right-[calc((100%-1024px)/2)]',
            )}
        >
            <div className="flex items-center gap-4 md:flex-col">
                <div className="block md:hidden">
                    <ProfileImage size={32} profileImg={user.profileImg} />
                </div>
                <div className="hidden md:block">
                    <ProfileImage size={64} profileImg={user.profileImg} />
                </div>
                <div className="flex flex-col items-start gap-2 md:items-center">
                    <p className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                        {user.nickname}
                    </p>
                    <Link
                        href="/my-page"
                        className="text-mobile-body-sm text-point-500 underline md:text-pc-body-sm"
                        // onClick={onClose}
                    >
                        내 프로필 보기
                    </Link>
                </div>
            </div>
            <button
                className="btn-solid btn-mobile-md md:btn-pc-md"
                onClick={handleLogout}
            >
                로그아웃
            </button>
        </div>
    )
}
