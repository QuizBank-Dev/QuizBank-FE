import { Tooltip } from '@/types/annualStudyHeatmap'

interface TooltipProps {
    tooltip: Tooltip | null
}

export default function HeatmapTooltip({ tooltip }: TooltipProps) {
    if (!tooltip) return null

    return (
        <div
            className="absolute rounded bg-gray-900 px-[8px] py-[8px] text-mobile-body-sm text-white md:text-pc-body-sm"
            style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
        >
            {tooltip.text}
        </div>
    )
}
