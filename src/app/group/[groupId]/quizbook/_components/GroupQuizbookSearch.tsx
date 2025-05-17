'use client'

import {
    CardSkeleton,
    InfiniteScrollContainer,
    QuizbookCard,
} from '@/components'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import Link from 'next/link'
import RightArrowIcon from '@/assets/svgs/right-arrow.svg'
import { useGroupQuizbookListQuery } from '@/hooks/queries/group-quizbook'
import { extractKSTDateOnly } from '@/utils/date/dateOnly'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function GroupQuizbookSearch({ groupId }: { groupId: string }) {
    const { groupQuizbookListQuery, setStandard, setStatus, setSort } =
        useGroupQuizbookListQuery(groupId, new Date().toString())
    const router = useRouter()
    const queryClient = useQueryClient()

    useEffect(() => {
        return () =>
            queryClient.removeQueries({
                queryKey: ['group-quizbook-list', groupId],
            })
    }, [groupId, queryClient])

    const list =
        groupQuizbookListQuery.data?.pages.flatMap((page) => page.list) ?? []

    return (
        <section className="flex flex-col gap-4 md:mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Select
                        defaultValue="in-progress"
                        onValueChange={(value) => {
                            queryClient.removeQueries({
                                queryKey: ['group-quizbook-list', groupId],
                            })
                            setStatus(value)
                            setStandard(new Date().toString())
                        }}
                    >
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="마감 상태" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in-progress">진행중</SelectItem>
                            <SelectItem value="complete">완료</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue="increase"
                        onValueChange={(value) => {
                            queryClient.removeQueries({
                                queryKey: ['group-quizbook-list', groupId],
                            })
                            setSort(value)
                            setStandard(new Date().toString())
                        }}
                    >
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="정렬 기준" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="increase">
                                마감 오름차순
                            </SelectItem>
                            <SelectItem value="decrease">
                                마감 내림차순
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Link
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                    href={`/quizbook`}
                >
                    문제집 선정
                </Link>
            </div>

            <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                <span className="text-point-500">
                    {groupQuizbookListQuery.data
                        ? (
                              list.length +
                              groupQuizbookListQuery.data.pages[
                                  groupQuizbookListQuery.data.pages.length - 1
                              ].leftCount
                          ).toLocaleString('en-US')
                        : '--'}
                </span>
                개의 결과
            </div>

            <InfiniteScrollContainer
                isPending={groupQuizbookListQuery.isPending}
                hasNextPage={groupQuizbookListQuery.hasNextPage}
                isFetchingNextPage={groupQuizbookListQuery.isFetchingNextPage}
                fetchNextPage={groupQuizbookListQuery.fetchNextPage}
                SkeletonUI={<CardSkeleton />}
                className={'flex flex-col gap-4'}
            >
                {list.map((groupQuizbook) => (
                    <QuizbookCard
                        key={groupQuizbook.quizbook._id}
                        id={groupQuizbook.quizbook._id}
                        {...groupQuizbook.quizbook}
                        badge={{
                            status: groupQuizbook.quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        onClick={() => {
                            router.push(
                                `/quizbook/${groupQuizbook.quizbook._id}`,
                            )
                        }}
                    >
                        <QuizbookCard.Description />
                        <div className="flex w-full items-end justify-between">
                            <QuizbookCard.Author />
                            <div className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                                마감일:{' '}
                                <span className="text-mobile-body-sm font-semi-bold text-point-500 md:text-pc-body-sm">
                                    {extractKSTDateOnly(groupQuizbook.endedAt)}
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-end justify-between">
                            <div className="flex gap-2">
                                <QuizbookCard.SolvedRate />
                                <QuizbookCard.ReviewRate />
                                <QuizbookCard.QuizCount />
                            </div>
                            <Link
                                href={`/group/${groupId}/quizbook/${groupQuizbook.quizbook._id}`}
                                className="flex cursor-pointer items-center gap-1 text-point-500"
                            >
                                <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                                    문제집 활동 상세
                                </span>
                                <RightArrowIcon className="size-5 md:size-6" />
                            </Link>
                        </div>
                    </QuizbookCard>
                ))}
            </InfiniteScrollContainer>
        </section>
    )
}
