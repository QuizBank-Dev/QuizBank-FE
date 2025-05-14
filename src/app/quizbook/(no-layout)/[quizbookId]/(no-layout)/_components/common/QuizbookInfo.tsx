'use client'

import StudySvg from '@/assets/svgs/study.svg'
import OtherSightSvg from '@/assets/svgs/other-sight.svg'
import UserSvg from '@/assets/svgs/user.svg'
import StarFullSvg from '@/assets/svgs/star-full.svg'
import NoteSvg from '@/assets/svgs/note.svg'

import { QuizbookMeta, QuizbookStates } from '@/types/quizbook'
import clsx from 'clsx'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
    className?: string
    quizbookMeta: QuizbookMeta
    quizbookStates: QuizbookStates
    isToggle?: boolean
}

export default function QuizbookInfo({
    className = '',
    quizbookMeta,
    quizbookStates,
    isToggle = false,
}: Props) {
    const router = useRouter()
    const pathname = usePathname()

    const [mode, setMode] = useState<'study' | 'solution'>(
        pathname.includes('/solution') ? 'solution' : 'study',
    )

    const onToggle = () => {
        const next = mode === 'study' ? 'solution' : 'study'
        setMode(next)
        router.replace(`/quizbook/${quizbookMeta._id}/${next}`)
    }

    return (
        <div
            className={clsx(
                'flex items-stretch gap-[16px] bg-point-50 p-[16px]',
                className,
            )}
        >
            <div className="flex flex-col items-center justify-center gap-[8px]">
                <div className="flex flex-col text-mobile-body-lg font-semi-bold text-point-500 md:text-pc-body-lg">
                    {mode === 'study' ? (
                        <div className="flex flex-col items-center gap-[8px]">
                            <StudySvg className="size-6 md:size-8" />
                            <span>학습 모드</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-[8px]">
                            <OtherSightSvg className="size-6 md:size-8" />
                            <span>해설 모드</span>
                        </div>
                    )}
                </div>
                {/* 전환 토글 */}
                {isToggle && (
                    <div
                        onClick={onToggle}
                        className="flex cursor-pointer items-center gap-[16px] rounded-full bg-white p-[4px]"
                    >
                        <StudySvg
                            className={clsx('size-6 rounded-full p-[4px]', {
                                'bg-point-500 text-white': mode === 'study',
                            })}
                        />
                        <OtherSightSvg
                            className={clsx('size-6 rounded-full p-[4px]', {
                                'bg-point-500 text-white': mode === 'solution',
                            })}
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col justify-between gap-[8px]">
                <div className="flex flex-col">
                    <span className="text-mobile-caption text-point-500 md:text-pc-caption">
                        {quizbookMeta.category}
                    </span>
                    <h2 className="line-clamp-1 text-mobile-body-lg font-semi-bold md:text-pc-body-md">
                        {quizbookMeta.title}
                    </h2>
                </div>
                <span className="line-clamp-2 text-mobile-body-md text-gray-500 md:text-pc-body-sm">
                    {quizbookMeta.description}
                </span>
                <div className="flex items-center justify-end gap-[8px] text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                    <div className="flex items-center gap-[4px]">
                        <UserSvg className="size-5 text-point-200" />
                        <div className="flex items-center gap-[2px]">
                            <span>
                                {(
                                    (quizbookStates.solvedScore /
                                        (quizbookStates.solvedCount *
                                            quizbookStates.totalScore)) *
                                    100
                                ).toFixed(1)}
                                %
                            </span>
                            <span className="text-gray-400">{`(${quizbookStates.solvedCount})`}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                        <StarFullSvg className="size-5 text-[#FDDD51]" />
                        <div className="flex items-center gap-[2px]">
                            <span>
                                {quizbookStates.reviewRating.toFixed(1)}
                            </span>
                            <span className="text-gray-400">{`(${quizbookStates.reviewCount})`}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                        <NoteSvg className="size-5 text-gray-400" />
                        <div className="flex items-center gap-[2px]">
                            <span>{quizbookMeta.quizList.length + 1}</span>
                            <span className="text-gray-400">문제</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
