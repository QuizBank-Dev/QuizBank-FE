'use client'

import { useState } from 'react'
import { Tooltip } from '@/types/annualStudyHeatmap'
import YearNavigator from './YearNavigator'
import HeatmapChart from './HeatmapChart'
import HeatmapTooltip from './HeatmapTooltip'
import ScrollContainer from './ScrollContainer'
import { useYearlyLogQuery } from '@/hooks/queries/study-log'

interface Props {
    targetUserId?: string
}

export default function AnnualStudyHeatmap({ targetUserId }: Props) {
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [tooltip, setTooltip] = useState<Tooltip | null>(null)
    const { data, setOffset } = useYearlyLogQuery(targetUserId)

    // 이전, 다음 버튼 클릭 핸들러
    const onPrevHandler = async () => {
        setYear((prev) => prev - 1)

        // 이전 년도 데이터 패칭
        setOffset((prev) => prev + 1)
    }
    const onNextHandler = async () => {
        setYear((prev) => prev + 1)

        // 다음 년도 데이터 패칭
        setOffset((prev) => prev - 1)
    }

    return (
        <article className="flex flex-col gap-[16px] rounded-lg bg-white p-[16px] shadow-point md:px-[32px] md:pt-[16px]">
            <div className="flex items-center justify-between">
                <h3 className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    연간 학습
                </h3>
                <YearNavigator
                    year={year}
                    onPrev={onPrevHandler}
                    onNext={onNextHandler}
                    disabled={year >= new Date().getFullYear()}
                />
            </div>
            <ScrollContainer className="cursor-grab select-none overflow-x-scroll pb-[8px]">
                <HeatmapChart data={data} year={year} onTooltip={setTooltip} />
                <HeatmapTooltip tooltip={tooltip} />
            </ScrollContainer>
        </article>
    )
}
