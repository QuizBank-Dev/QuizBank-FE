'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    text: string
    href: string
}

export default function MenuItem({ text, href }: Props) {
    const pathname = usePathname()

    return (
        <div className="flex w-[130px] items-center justify-center">
            <Link
                href={href}
                className={clsx(
                    'text-pc-title-sm font-extra-bold',
                    pathname.startsWith(href) ? 'text-point-500' : 'text-black',
                )}
            >
                {text}
            </Link>
        </div>
    )
}
