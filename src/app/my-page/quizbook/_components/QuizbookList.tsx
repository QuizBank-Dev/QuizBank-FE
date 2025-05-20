'use client'

import { useRouter } from 'next/navigation'
import {
    CardSkeleton,
    EmptyList,
    InfiniteScrollContainer,
    QuizbookCard,
} from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { useAuthorQuizbookListQuery } from '@/hooks/queries/quizbook'
import QuizbookSvg from '@/assets/svgs/quizbook.svg'

export default function QuizbookList() {
    const router = useRouter()
    const {
        data: { quizbookList, totalCount },
        isPending,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useAuthorQuizbookListQuery('me')

    return (
        <>
            <header className="flex items-center justify-between">
                <span className="text-mobile-body-lg md:text-pc-body-lg">
                    {!isPending && (
                        <span className="font-bold text-point-500">
                            {totalCount}
                        </span>
                    )}{' '}
                    퀴즈
                </span>
            </header>
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
                        text="생성한 문제집이 존재하지 않습니다."
                    />
                )}
                {quizbookList.map((quizbook) => (
                    <QuizbookCard
                        key={`my_${quizbook._id}`}
                        id={quizbook._id}
                        {...quizbook}
                        badge={{
                            status: quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        onClick={() =>
                            router.push(`/quizbook/${quizbook._id}/info`)
                        }
                    >
                        <QuizbookCard.Description />
                        <div className="flex items-center gap-2">
                            <QuizbookCard.SolvedRate />
                            <QuizbookCard.ReviewRate />
                            <QuizbookCard.QuizCount />
                        </div>
                    </QuizbookCard>
                ))}
            </InfiniteScrollContainer>
        </>
    )
}
