import clsx from 'clsx'
import { CategoryEmoji, CategoryType } from '@/constants/common/category'

interface Props {
    category: CategoryType
    onToggle: (category: CategoryType) => void
    isSelected?: boolean
}

export default function CategoryItem({
    category,
    onToggle,
    isSelected,
}: Props) {
    const emoji = CategoryEmoji[category]

    return (
        <div
            className={clsx(
                'cursor-pointer rounded-lg bg-white p-4 duration-100 hover:bg-point-100/30',
                isSelected &&
                    '!bg-point-100 text-point-700 hover:!bg-point-100/80',
            )}
            onClick={() => onToggle(category)}
        >
            <span className="mr-4">{emoji}</span>
            <span>{category}</span>
        </div>
    )
}
