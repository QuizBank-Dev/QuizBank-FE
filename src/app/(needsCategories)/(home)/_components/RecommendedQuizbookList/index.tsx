'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { useQuizbookListQuery } from '@/hooks/queries/quizbook'
import { useCurrentUser } from '@/hooks/queries/user'
import { QuizbookListParams } from '@/types/api/quizbook'
import { CategoryType } from '@/constants/common/category'
import { CardSkeleton, EmptyList } from '@/components'
import TitleWithMore from '../TitleWithMore'
import QuizbookCard from './QuizbookCard'
import FilterItem from './FilterItem'
import QuizbookSvg from '@/assets/svgs/quizbook.svg'

export default function RecommendedQuizbookList() {
    const { data: user } = useCurrentUser()
    const [filter, setFilter] = useState<
        Pick<QuizbookListParams, 'sort' | 'category'>
    >({
        sort: 'latest',
    })
    const {
        data: { quizbookList },
        isPending,
    } = useQuizbookListQuery(filter)

    return (
        <div className="flex flex-col gap-4">
            <TitleWithMore
                title="추천 문제집"
                link={`/quizbook?${new URLSearchParams(filter).toString()}`}
            />
            <div className="no-scrollbar flex gap-4 overflow-x-scroll">
                <FilterItem
                    text="신규"
                    currentFilter={filter}
                    myFilter={{ sort: 'latest' }}
                    setFilter={setFilter}
                />{' '}
                <FilterItem
                    text="인기"
                    currentFilter={filter}
                    myFilter={{ sort: 'rating' }}
                    setFilter={setFilter}
                />
                {user &&
                    user.category.map((c) => (
                        <FilterItem
                            key={c}
                            text={`#${c}`}
                            currentFilter={filter}
                            myFilter={{ category: c as CategoryType }}
                            setFilter={setFilter}
                        />
                    ))}
            </div>
            <div
                className={clsx(
                    'custom-scrollbar flex gap-4 overflow-x-scroll p-2',
                    isPending && 'no-scrollbar',
                    !isPending && quizbookList.length === 0 && 'flex-col',
                )}
            >
                {isPending && (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                )}
                {!isPending && quizbookList.length === 0 && (
                    <EmptyList Icon={QuizbookSvg} />
                )}
                {quizbookList.map((quizbook) => (
                    <QuizbookCard key={quizbook._id} {...quizbook} />
                ))}
            </div>
        </div>
    )
}
