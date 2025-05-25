'use client'

import { InfiniteScrollContainer, QuizbookCard } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { useInfiniteQuizbookLikeList } from '@/hooks/queries/like'
import { useRouter } from 'next/navigation'

export default function QuizbookLikeListUI() {
    const router = useRouter()
    const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
        useInfiniteQuizbookLikeList()
    const quizbookLikeList = data?.pages.flatMap((p) => p.data) ?? []

    return (
        <div>
            <p className="mb-2 text-mobile-body-md font-semi-bold md:text-pc-body-md">
                {!isPending && (
                    <span className="text-point-500">
                        {data ? data.pages[0].totalCount : 0}
                    </span>
                )}
                개의 문제집
            </p>
            <InfiniteScrollContainer
                className="flex flex-col gap-[16px]"
                isPending={isPending}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
            >
                {quizbookLikeList.map((quizbook) => (
                    <QuizbookCard
                        key={quizbook._id}
                        id={quizbook._id}
                        {...quizbook}
                        badge={{
                            status: quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        title={quizbook.title}
                        category={quizbook.category}
                        onClick={() =>
                            router.push(`/quizbook/${quizbook._id}/info`)
                        }
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
