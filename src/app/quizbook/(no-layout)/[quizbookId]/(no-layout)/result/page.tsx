import StarFullSvg from '@/assets/svgs/star-full.svg'

import { getQuizbookMeta } from '@/lib/api/quizbook'
import { notFound } from 'next/navigation'
import { ResultCard, ResultTable } from './_components'
import { getStudyResult } from '@/lib/api/study'

interface Props {
    params: Promise<{ quizbookId: string }>
}

export default async function Page({ params }: Props) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId).catch(() => null)
    const studyResult = await getStudyResult(quizbookId).catch(() => null)
    if (!quizbookMeta || !studyResult) return notFound()

    const score = studyResult.quizList.reduce((acc, val) => acc + val.score, 0)

    return (
        <div className="flex w-full flex-col gap-[32px] pb-[16px] md:pb-[32px]">
            <ResultCard score={score} totalScore={quizbookMeta.totalScore}>
                <div className="relative flex items-center pt-[16px] md:pt-[32px]">
                    <StarFullSvg className="size-8 rotate-45 text-yellow-300 md:size-12" />
                    <StarFullSvg className="size-8 -translate-y-4 scale-125 text-yellow-300 md:size-12" />
                    <StarFullSvg className="size-8 -rotate-45 text-yellow-300 md:size-12" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[16px]">
                    <div className="flex flex-col items-center text-mobile-body-lg font-semi-bold text-point-500 md:text-pc-body-lg">
                        Score
                        <span className="text-mobile-title-md md:text-pc-title-md">
                            {score}
                        </span>
                    </div>
                    <div className="text-mobile-body-md font-semi-bold text-gray-400 md:text-pc-body-md">
                        Total: {quizbookMeta.totalScore}
                    </div>
                </div>
            </ResultCard>
            <section className="flex flex-col gap-[8px] px-[16px] md:px-[32px]">
                <h2 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    문제별 점수
                </h2>
                <ResultTable quizList={studyResult.quizList} />
            </section>
        </div>
    )
}
