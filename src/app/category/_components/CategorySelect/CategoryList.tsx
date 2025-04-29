import { Categories, CategoryType } from '@/constants/common/category'
import CategoryItem from './CategoryItem'

interface Props {
    categories: CategoryType[]
    onToggle: (category: CategoryType) => void
}

export default function CategoryList({ categories, onToggle }: Props) {
    return (
        <div className="flex w-full flex-col gap-2">
            {Categories.map((category) => (
                <CategoryItem
                    key={category}
                    category={category}
                    isSelected={categories.includes(category)}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}
