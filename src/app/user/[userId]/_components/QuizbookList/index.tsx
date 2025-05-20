'use client'

import { useParams } from 'next/navigation'
import { useAuthorQuizbookListQuery } from '@/hooks/queries/quizbook'
import { CardSkeleton, EmptyList, InfiniteScrollContainer } from '@/components'
import QuizbookCard from './QuizbookCard'
import QuizbookSvg from '@/assets/svgs/quizbook.svg'

export default function QuizbookList() {
    const { userId } = useParams<{ userId: string }>()
    const {
        data: { quizbookList, totalCount },
        isPending,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useAuthorQuizbookListQuery(userId)

    return (
        <div className="flex flex-col gap-2">
            <p className="text-mobile-body-md font-semi-bold text-gray-600 md:text-pc-body-md">
                생성한 문제집 (
                {!isPending && (
                    <span className="text-point-500">{totalCount}</span>
                )}
                )
            </p>
            <InfiniteScrollContainer
                className="flex flex-col gap-4"
                isPending={isPending}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                SkeletonUI={<CardSkeleton />}
            >
                {!isPending && quizbookList.length === 0 && (
                    <EmptyList
                        Icon={QuizbookSvg}
                        text="사용자가 생성한 문제집이 존재하지 않습니다."
                    />
                )}
                {quizbookList.map((quizbook) => (
                    <QuizbookCard key={`other_${quizbook._id}`} {...quizbook} />
                ))}
            </InfiniteScrollContainer>
        </div>
    )
}
