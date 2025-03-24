interface DonutProgressbarProps {
    ratio: number
    children?: React.ReactNode
    size?: number
    strokeWidth?: number
}

export default function DonutProgressbar({
    ratio,
    children,
    size = 100,
    strokeWidth = 14,
}: DonutProgressbarProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - ratio * circumference

    return (
        <div
            className="relative inline-block"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size}>
                {/* 백그라운드 원 */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#F0F0FF"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* 비율 원 */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#C099FF"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                {/* 중심 원 */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius - strokeWidth / 2}
                    fill="#FFFFFF"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}
