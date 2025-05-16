'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { toast } from 'sonner'
import { CategoryType } from '@/constants/common/category'
import { LoopAnimation } from '@/components'
import CategoryList from './CategoryList'
import { setCategory } from '@/lib/api/category'
import { useCurrentUser } from '@/hooks/queries/user'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { QueryKey } from '@/constants/common/queryKey'

export default function CategorySelect() {
    const router = useRouter()
    const queryClient = getQueryClient()
    const { data: user } = useCurrentUser()
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<CategoryType[]>([])

    const handleUpdateCategory = async () => {
        setIsLoading(true)
        setCategory(categories)
            .then(() => {
                toast('카테고리를 저장했습니다.')
                router.push('/')
                queryClient.invalidateQueries({
                    queryKey: QueryKey.user.DEFAULT,
                })
            })
            .catch(() => {
                toast('카테고리를 저장하던 중 오류가 발생했습니다.')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleToggleCategory = (category: CategoryType) => {
        setCategories((prev) =>
            !prev.includes(category)
                ? [...prev, category]
                : prev.filter((i) => i !== category),
        )
    }

    useEffect(() => {
        setCategories((user?.category as CategoryType[]) || [])
    }, [user])

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
