export const enum QuizbookCardStatus {
    BEFORE = '학습전',
    IN_PROGRESS = '학습중',
    COMPLETED = '학습완료',
}

export const StatusColor: Record<QuizbookCardStatus, string> = {
    [QuizbookCardStatus.BEFORE]: 'bg-gray-300',
    [QuizbookCardStatus.IN_PROGRESS]: 'bg-danger-300',
    [QuizbookCardStatus.COMPLETED]: 'bg-point-500',
}
