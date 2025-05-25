'use client'

import StudySvg from '@/assets/svgs/study.svg'
import PlaySvg from '@/assets/svgs/play.svg'

import { EmptyList } from '@/components'
import { getAnswerStore, useRecentQuizbookStore } from '@/store/quizbook'

export default function RecentStudyBoard() {
    const { recent } = useRecentQuizbookStore()

    const answerStore = getAnswerStore(recent?._id || '__empty__')
    const { answerMap } = answerStore()
    const solvedCount = Object.keys(answerMap).length

    return (
        <div className="flex flex-col gap-[16px] rounded-lg bg-white p-[16px] shadow-point md:px-[32px] md:pb-[32px]">
            <h3 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                최근 학습
            </h3>
            <div className="flex flex-1 items-center gap-[16px]">
                <div className="flex size-10 items-center justify-center rounded-full bg-point-500">
                    <PlaySvg className="size-6 text-white" />
                </div>
                {recent ? (
                    <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-1 flex-col">
                            <span className="text-mobile-caption text-point-500 md:text-pc-caption">
                                {recent.category}
                            </span>
                            <h4 className="line-clamp-1 text-mobile-body-md font-semi-bold md:text-pc-body-md">
                                {recent.title}
                            </h4>
                        </div>
                        <div className="flex items-center gap-[4px] text-mobile-body-sm text-gray-400 md:text-pc-body-sm">
                            <span className="text-gray-900">진행도</span>
                            <div className="flex items-center gap-[2px]">
                                <span className="font-semi-bold text-point-500">
                                    {solvedCount}
                                </span>
                                <span>/</span>
                                <span>{recent.count}</span>
                            </div>
                            <span>{`(${solvedCount ? 0 : solvedCount / recent.count}%)`}</span>
                        </div>
                    </div>
                ) : (
                    <span className="text-gray-400">
                        학습 중인 문제집이 없습니다.
                    </span>
                )}
            </div>
        </div>
    )
}
