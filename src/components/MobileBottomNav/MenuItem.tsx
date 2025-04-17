'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
    text: string
    href: string
    children: React.ReactNode
}

export default function MenuItem({ text, href, children }: Props) {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div
            className={clsx(
                'flex w-[75px] items-center justify-center p-[6.5px] text-mobile-caption font-semi-bold',
                (href === '/'
                    ? pathname === href
                    : pathname.startsWith(href)) && 'text-point-500',
            )}
        >
            <div
                className="flex cursor-pointer flex-col items-center gap-1"
                onClick={() => router.push(href)}
            >
                {children}
                {text}
            </div>
        </div>
    )
}
