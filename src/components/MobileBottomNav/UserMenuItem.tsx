'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
    text: string
    href: string
    children: React.ReactNode
}

export default function UserMenuItem({ text, href, children }: Props) {
    // 추후 컨택스트로부터 값을 불러와서 인증 여부에 따라 disable 처리

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
