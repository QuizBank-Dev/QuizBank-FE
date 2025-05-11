'use client'

import CloseSvg from '@/assets/svgs/close.svg'
import IndexSvg from '@/assets/svgs/index.svg'
import CommentSvg from '@/assets/svgs/comment.svg'

import { useEffect } from 'react'
import { useMobileMenuStore } from '@/store/quizbook'
import { Quizbook } from '@/types/quizbook'
import { QuizbookInfo } from '../common'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'

interface Props {
    quizbook: Quizbook<string>
}

export default function MobileMenu({ quizbook }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const panel = useSearchParams().get('panel')

    const { isOpen, closeMenu } = useMobileMenuStore()

    const handleClick = (path: string) => {
        closeMenu()
        router.replace(path)
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        const handler = (e: MediaQueryListEvent) => {
            if (e.matches) closeMenu()
        }
        mediaQuery.addEventListener('change', handler)

        return () => mediaQuery.removeEventListener('change', handler)
    }, [closeMenu])

    if (!isOpen) return null

    return (
        <div className="absolute z-50 flex min-h-screen w-full flex-col bg-white md:hidden">
            {/* 헤더 영역 */}
            <header className="flex w-full p-[16px]">
                <div className="size-6" />
                <h1 className="flex-1 text-center text-mobile-title-sm font-extra-bold">
                    메뉴
                </h1>
                <div className="flex items-center justify-end">
                    <CloseSvg
                        onClick={closeMenu}
                        className="size-6 cursor-pointer"
                    />
                </div>
            </header>

            {/* 컨텐츠 영역 */}
            <div className="flex-1">
                {/* 문제집 정보 영역 */}
                <QuizbookInfo quizbook={quizbook} isToggle={true} />

                {/* 메뉴 리스트 영역 */}
                <button
                    onClick={() => handleClick(`${pathname}?panel=list`)}
                    className={clsx(
                        'flex w-full items-center gap-[16px] p-[16px] text-gray-500',
                        {
                            'bg-gray-200': panel === 'list',
                        },
                    )}
                >
                    <IndexSvg className="size-6" />
                    문제내역
                </button>
                <button
                    onClick={() => handleClick(`${pathname}?panel=comment`)}
                    className={clsx(
                        'flex w-full items-center gap-[16px] p-[16px] text-gray-500',
                        {
                            'bg-gray-200': panel === 'comment',
                        },
                    )}
                >
                    <CommentSvg className="size-6" />
                    댓글
                </button>
            </div>
        </div>
    )
}
