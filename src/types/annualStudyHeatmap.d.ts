export interface HeatmapValue {
    date: string | Date
    solvedCount?: number
}

export interface Tooltip {
    x: number
    y: number
    text: string
}

export type MonthLabelsType = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
]
