'use client'

import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { InfiniteScrollContainer, QuizbookCard } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { useQuizbookListQuery } from '@/hooks/queries/quizbook/useQuizbookListQuery'
import { CategoryType } from '@/constants/common/category'
import { QuizbookSortType } from '@/types/api/quizbook'
import EmptyList from './EmptyList'

export default function QuizbookList() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = useMemo(
        () => ({
            keyword: searchParams.get('keyword') || undefined,
            category:
                (searchParams.get('category') as CategoryType) || undefined,
            sort: (searchParams.get('sort') as QuizbookSortType) || undefined,
        }),
        [searchParams],
    )
    const {
        data: { totalCount, quizbookList },
        isPending,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useQuizbookListQuery(params)

    return (
        <div>
            <p className="mb-2 text-mobile-body-md font-semi-bold md:text-pc-body-md">
                {!isPending && (
                    <span className="text-point-500">{totalCount}</span>
                )}
                개의 결과
            </p>
            <InfiniteScrollContainer
                className="flex flex-col gap-4"
                isPending={isPending}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
            >
                {!isPending && quizbookList.length === 0 && <EmptyList />}
                {quizbookList.map((quizbook) => (
                    <QuizbookCard
                        key={quizbook._id}
                        id={quizbook._id}
                        {...quizbook}
                        badge={{
                            status: quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        onClick={() => router.push(`/quizbook/${quizbook._id}`)}
                    >
                        <QuizbookCard.Description />
                        <QuizbookCard.Author />
                        <div className="flex w-full justify-between">
                            <div className="flex items-center gap-2">
                                <QuizbookCard.SolvedRate />
                                <QuizbookCard.ReviewRate />
                                <QuizbookCard.QuizCount />
                            </div>
                            <QuizbookCard.LikeButton
                                isLike={quizbook.isLiked}
                            />
                        </div>
                    </QuizbookCard>
                ))}
            </InfiniteScrollContainer>
        </div>
    )
}
