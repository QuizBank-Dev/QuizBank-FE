import CalenderHeatmap from 'react-calendar-heatmap'
import { MONTH_LABELS } from '@/constants/common/annualStudyHeatmap'
import { HeatmapValue, Tooltip } from '@/types/annualStudyHeatmap'

import 'react-calendar-heatmap/dist/styles.css'

interface HeatmapChartProps {
    data?: HeatmapValue[]
    year: number
    onTooltip: (tooltip: Tooltip | null) => void
}

export default function HeatmapChart({
    data,
    year,
    onTooltip,
}: HeatmapChartProps) {
    return (
        <div className="relative min-w-[768px]">
            <CalenderHeatmap
                startDate={`${year - 1}-12-31`}
                endDate={new Date(`${year}-12-31`)}
                values={data || []}
                monthLabels={MONTH_LABELS}
                classForValue={(value) => {
                    if (!value?.solvedCount) return 'color-empty'

                    return `color-scale-${value.solvedCount > 30 ? 4 : value.solvedCount > 20 ? 3 : value.count > 10 ? 2 : 1}`
                }}
                tooltipDataAttrs={(value) => {
                    if (
                        !value ||
                        value.date === null ||
                        value.solvedCount === null
                    )
                        return {}
                    return {
                        onMouseEnter: (e) => {
                            onTooltip({
                                x: e.clientX,
                                y: e.clientY,
                                text: `Date: ${value.date} | Solved: ${value.solvedCount}`,
                            })
                        },
                        onMouseLeave: () => onTooltip(null),
                    }
                }}
            />
        </div>
    )
}
