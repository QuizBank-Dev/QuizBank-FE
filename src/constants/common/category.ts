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

export const CategoryBackgroundImg = {
    자료구조: '/jpgs/background1.jpg',
    알고리즘: '/jpgs/background2.jpg',
    네트워크: '/jpgs/background3.jpg',
    데이터베이스: '/jpgs/background4.jpg',
    '웹 개발': '/jpgs/background5.jpg',
    기타: '/jpgs/background6.jpg',
}
