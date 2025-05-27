'use client'

import StudySvg from '@/assets/svgs/study.svg'

import { EmptyList, InfiniteScrollContainer, QuizbookCard } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { useInfiniteStudyResultList } from '@/hooks/queries/study'
import { useRouter } from 'next/navigation'

export default function StudyResultListUI() {
    const router = useRouter()
    const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
        useInfiniteStudyResultList()
    const studyResultList = data?.pages.flatMap((p) => p.data) ?? []

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
            {!isPending && studyResultList.length === 0 ? (
                <EmptyList Icon={StudySvg} text="학습한 문제집이 없습니다." />
            ) : (
                <InfiniteScrollContainer
                    className="flex flex-col gap-[16px]"
                    isPending={isPending}
                    hasNextPage={hasNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                    fetchNextPage={fetchNextPage}
                >
                    {studyResultList.map((result) => (
                        <QuizbookCard
                            key={result.quizbook._id}
                            id={result.quizbook._id}
                            {...result.quizbook}
                            title={result.quizbook.title}
                            category={result.quizbook.category}
                            badge={{
                                status: QuizbookCardStatus.COMPLETED,
                                customText: `${result.score} / ${result.quizbook.totalScore}xp (${result.score ? Math.floor(result.score / result.quizbook.totalScore) * 100 : 0}%)`,
                            }}
                            onClick={() =>
                                router.push(
                                    `/quizbook/${result.quizbook._id}/result`,
                                )
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
