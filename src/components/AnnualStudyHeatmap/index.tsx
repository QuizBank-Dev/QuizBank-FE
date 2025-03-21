'use client'

import { useState } from 'react'
import { Tooltip } from '@/types'
import YearNavigator from './YearNavigator'
import HeatmapChart from './HeatmapChart'
import HeatmapTooltip from './HeatmapTooltip'
import ScrollContainer from './ScrollContainer'

export default function AnnualStudyHeatmap() {
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [tooltip, setTooltip] = useState<Tooltip | null>(null)

    // 데이터 패칭 로직 작성 필요 (현재 더미 데이터).
    const data = [
        { date: '2025-01-02', count: 12 },
        { date: '2025-01-22', count: 120 },
        { date: '2025-01-30', count: 20 },
        { date: '2025-01-30', count: 38 },
        { date: '2025-02-01', count: 38 },
        { date: '2025-02-02', count: 10 },
        { date: '2025-02-03', count: 20 },
        { date: '2025-02-04', count: 10 },
        { date: '2025-02-05', count: 20 },
    ]

    // 이전, 다음 버튼 클릭 핸들러
    const onPrevHandler = async () => {
        setYear((prev) => prev - 1)

        // 이전 년도 데이터 패칭 로직 작성 필요
    }
    const onNextHandler = async () => {
        setYear((prev) => prev + 1)

        // 다음 년도 데이터 패칭 로직 작성 필요
    }

    return (
        <section className="flex flex-col gap-[16px] rounded-lg p-[16px] shadow-point md:px-[32px] md:pt-[16px]">
            <div className="flex items-center justify-between">
                <p className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    연간 학습
                </p>
                <YearNavigator
                    year={year}
                    onPrev={onPrevHandler}
                    onNext={onNextHandler}
                    disabled={year >= new Date().getFullYear()}
                />
            </div>
            <ScrollContainer className="custom-scrollbar cursor-grab select-none overflow-x-scroll pb-[8px]">
                <HeatmapChart data={data} year={year} onTooltip={setTooltip} />
                <HeatmapTooltip tooltip={tooltip} />
            </ScrollContainer>
        </section>
    )
}
