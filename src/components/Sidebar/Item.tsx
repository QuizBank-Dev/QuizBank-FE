'use client'

import Link from 'next/link'
import RightArrowIcon from '@/assets/svgs/right-arrow.svg'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface Props {
    icon: React.ReactNode
    text: string
    subText?: string
    href: string
}

export default function Item({ icon, text, subText, href }: Props) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={clsx(
                'flex items-center justify-between p-3',
                pathname === href && 'bg-point-100',
            )}
        >
            <div className="flex items-center gap-3">
                {icon}
                <div className="flex flex-col items-start gap-1 text-mobile-body-md font-regular md:text-pc-body-md">
                    {text}
                    {subText && (
                        <span className="text-mobile-body-sm md:text-pc-body-sm">
                            {subText}
                        </span>
                    )}
                </div>
            </div>
            <RightArrowIcon className="size-5" />
        </Link>
    )
}
