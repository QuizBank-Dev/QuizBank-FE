'use client'

import StudySvg from '@/assets/svgs/study.svg'
import OtherSightSvg from '@/assets/svgs/other-sight.svg'
import IndexSvg from '@/assets/svgs/index.svg'
import CommentSvg from '@/assets/svgs/comment.svg'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface Props {
    quizbookId: string
}

export default function DesktopMenu({ quizbookId }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const panel = useSearchParams().get('panel') as 'comment' | 'list' | null

    const [mode, setMode] = useState<
        'study' | 'solution' | 'list' | 'comment'
    >()

    useEffect(() => {
        setMode(
            panel || (pathname.includes('/solution') ? 'solution' : 'study'),
        )
    }, [pathname, panel])

    const handleClick = (path: 'study' | 'solution' | 'list' | 'comment') => {
        if (path === 'list' || path === 'comment') {
            router.replace(`${pathname}?panel=${path}`)
        } else {
            router.push(`/quizbook/${quizbookId}/${path}`)
        }
    }

    return (
        <nav className="hidden shrink-0 flex-col bg-gray-100 text-gray-500 md:flex">
            <button
                onClick={() => handleClick('study')}
                className={clsx('flex flex-col items-center p-[16px]', {
                    'bg-gray-300': mode === 'study',
                })}
            >
                <StudySvg className="size-6" />
                학습 모드
            </button>
            <button
                onClick={() => handleClick('solution')}
                className={clsx('flex flex-col items-center p-[16px]', {
                    'bg-gray-300': mode === 'solution',
                })}
            >
                <OtherSightSvg className="size-6" />
                해설 모드
            </button>
            <button
                onClick={() => handleClick('list')}
                className={clsx('flex flex-col items-center p-[16px]', {
                    'bg-gray-300': mode === 'list',
                })}
            >
                <IndexSvg className="size-6" />
                문제 내역
            </button>
            <button
                onClick={() => handleClick('comment')}
                className={clsx('flex flex-col items-center p-[16px]', {
                    'bg-gray-300': mode === 'comment',
                })}
            >
                <CommentSvg className="size-6" />
                댓글
            </button>
        </nav>
    )
}
