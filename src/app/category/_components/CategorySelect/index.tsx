'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { CategoryType } from '@/constants/common/category'
import { LoopAnimation } from '@/components'
import CategoryList from './CategoryList'

export default function CategorySelect() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<CategoryType[]>([
        CategoryType.DATA_STRUCTURE,
    ])

    const handleUpdateCategory = async () => {
        setIsLoading(true)
        // TODO 카테고리 설정 API 호출
        const result = await new Promise<string>((resolve) =>
            setTimeout(() => {
                console.log(categories)
                resolve('OK')
            }, 2000),
        )
        setIsLoading(false)

        if (result === 'OK') {
            // 완료
            alert('카테고리를 저장했습니다.')
            router.back()
        } else {
            // 실패 (Toast로 변경)
            alert('카테고리를 저장할 수 없습니다.')
        }
    }

    const handleToggleCategory = (category: CategoryType) => {
        setCategories((prev) =>
            !prev.includes(category)
                ? [...prev, category]
                : prev.filter((i) => i !== category),
        )
    }

    return (
        <>
            <CategoryList
                categories={categories}
                onToggle={handleToggleCategory}
            />
            <button
                type="button"
                disabled={isLoading || categories.length < 1}
                className={clsx(
                    'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                    isLoading && 'btn-loading',
                )}
                onClick={handleUpdateCategory}
            >
                {isLoading && <LoopAnimation />}
                {isLoading ? 'Loading...' : '계속하기'}
            </button>
        </>
    )
}
