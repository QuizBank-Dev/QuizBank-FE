'use client'

import { useCurrentUser } from '@/hooks/queries'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
    text: string
    href: string
    children: React.ReactNode
}

export default function UserMenuItem({ text, href, children }: Props) {
    const { data: user, isLoading } = useCurrentUser()

    const pathname = usePathname()
    const router = useRouter()

    return (
        <div
            className={clsx(
                'flex w-[75px] items-center justify-center p-[6.5px] text-mobile-caption font-semi-bold',
                !user || isLoading
                    ? 'text-gray-400'
                    : (href === '/'
                          ? pathname === href
                          : pathname.startsWith(href)) && 'text-point-500',
            )}
        >
            <div
                className="flex cursor-pointer flex-col items-center gap-1"
                onClick={() => {
                    router.push(!user || isLoading ? '/login' : href)
                }}
            >
                {children}
                {text}
            </div>
        </div>
    )
}
