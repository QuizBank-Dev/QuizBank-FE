import clsx from 'clsx'
import { QuizbookListParams } from '@/types/api/quizbook'

interface Props {
    text: string
    currentFilter: Pick<QuizbookListParams, 'sort' | 'category'>
    myFilter: Pick<QuizbookListParams, 'sort' | 'category'>
    setFilter: (filter: Pick<QuizbookListParams, 'sort' | 'category'>) => void
}

export default function FilterItem({
    text,
    currentFilter,
    myFilter,
    setFilter,
}: Props) {
    const handleChangeCurrentFilter = () => {
        setFilter(myFilter)
    }

    return (
        <button
            className={clsx(
                'shrink-0 text-mobile-body-md font-semi-bold text-gray-400 md:text-pc-body-md',
                JSON.stringify(currentFilter) === JSON.stringify(myFilter) &&
                    'text-point-500',
            )}
            onClick={handleChangeCurrentFilter}
        >
            {text}
        </button>
    )
}
