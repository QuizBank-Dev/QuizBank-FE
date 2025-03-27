export const enum QuizBookCardStatus {
    BEFORE = '학습전',
    IN_PROGRESS = '학습중',
    COMPLETED = '학습완료',
}

export const StatusColor: Record<QuizBookCardStatus, string> = {
    [QuizBookCardStatus.BEFORE]: 'bg-gray-300',
    [QuizBookCardStatus.IN_PROGRESS]: 'bg-danger-300',
    [QuizBookCardStatus.COMPLETED]: 'bg-point-500',
}
