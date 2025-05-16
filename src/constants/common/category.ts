export enum CategoryType {
    DATA_STRUCTURE = '자료구조',
    ALGORITHM = '알고리즘',
    NETWORK = '네트워크',
    DATABASE = '데이터베이스',
    WEB = '웹 개발',
    ETC = '기타',
}

export const Categories = Object.values(CategoryType)

export const CategoryEmoji: Record<CategoryType, string> = {
    자료구조: '🗂️',
    알고리즘: '📊',
    네트워크: '🌏',
    데이터베이스: '🗄️',
    '웹 개발': '💻',
    기타: '💬',
}

export const MINIMUM_REQUIRED_CATEGORIES = 1
