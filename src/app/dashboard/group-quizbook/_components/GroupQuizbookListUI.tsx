'use client'

import StudySvg from '@/assets/svgs/study.svg'

import { EmptyList, InfiniteScrollContainer, QuizbookCard } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { useInfiniteAllGroupQuizbookList } from '@/hooks/queries/group-quizbook'
import { isPast } from '@/utils/date/isPast'
import { useRouter } from 'next/navigation'

export default function GroupQuizbookListUI() {
    const router = useRouter()
    const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
        useInfiniteAllGroupQuizbookList()
    const groupQuizbookList = data?.pages.flatMap((p) => p.data) ?? []

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
            {!isPending && groupQuizbookList.length === 0 ? (
                <EmptyList
                    Icon={StudySvg}
                    text="그룹 선정 문제집이 없습니다."
                />
            ) : (
                <InfiniteScrollContainer
                    className="flex flex-col gap-[16px]"
                    isPending={isPending}
                    hasNextPage={hasNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                    fetchNextPage={fetchNextPage}
                >
                    {groupQuizbookList.map((quizbook) => (
                        <QuizbookCard
                            key={quizbook._id}
                            id={quizbook._id}
                            {...quizbook}
                            badge={{
                                status: !isPast(quizbook.endedAt)
                                    ? QuizbookCardStatus.COMPLETED
                                    : QuizbookCardStatus.BEFORE,
                                customText: !isPast(quizbook.endedAt)
                                    ? '진행중'
                                    : '마감',
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
                            </div>
                        </QuizbookCard>
                    ))}
                </InfiniteScrollContainer>
            )}
        </div>
    )
}
