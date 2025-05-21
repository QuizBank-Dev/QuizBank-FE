'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import GroupCard from './GroupCard'
import SearchSvg from '@/assets/svgs/search.svg'
import { useGroupListQuery } from '@/hooks/queries/group'
import Link from 'next/link'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { CardSkeleton, EmptyList, InfiniteScrollContainer } from '@/components'
import QuizbookSvg from '@/assets/svgs/quizbook.svg'

export default function GroupSearch() {
    const { groupListQuery, name, setName, theme, setTheme } =
        useGroupListQuery('total', 5)
    const queryClient = useQueryClient()

    // 첫 랜더링시, 남아있던 모든 my 그룹 관련 캐시 제거
    useEffect(() => {
        queryClient.removeQueries({
            queryKey: ['group', 'list', 'my'],
        })
    }, [])

    const list = groupListQuery.data?.pages.flatMap((page) => page.list) ?? []

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const newName = formData.get('name')?.toString() ?? ''
        const newTheme = formData.get('theme')?.toString() ?? 'total'

        // 캐시 제거
        if (theme === 'my')
            queryClient.removeQueries({
                queryKey: ['group', 'list', theme, name],
            })

        setName(newName)
        setTheme(newTheme)
    }

    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-2" onSubmit={handleSearch}>
                <div className="relative w-full">
                    <input
                        type="text"
                        name="name"
                        placeholder="그룹 제목 검색"
                        className="input-solid input-mobile pr-10 md:input-pc"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 size-6 -translate-y-1/2"
                    >
                        <SearchSvg />
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <Select
                        name="theme"
                        defaultValue="total"
                        onValueChange={(value) => {
                            setTheme(value)

                            // 캐시 제거
                            if (theme === 'my')
                                queryClient.removeQueries({
                                    queryKey: ['group', 'list', theme, name],
                                })
                        }}
                    >
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="total">전체</SelectItem>
                            <SelectItem value="my">나의 그룹</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link
                        className="btn-solid btn-mobile-md md:btn-pc-md"
                        href={'/group/new'}
                    >
                        그룹 생성
                    </Link>
                </div>
            </form>

            <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                <span className="text-point-500">
                    {groupListQuery.data
                        ? (
                              list.length +
                              groupListQuery.data.pages[
                                  groupListQuery.data.pages.length - 1
                              ].leftCount
                          ).toLocaleString('en-US')
                        : '--'}
                </span>
                개의 결과
            </div>

            <InfiniteScrollContainer
                isPending={groupListQuery.isPending}
                hasNextPage={groupListQuery.hasNextPage}
                isFetchingNextPage={groupListQuery.isFetchingNextPage}
                fetchNextPage={groupListQuery.fetchNextPage}
                SkeletonUI={<CardSkeleton />}
                className={'flex flex-col gap-4'}
            >
                {!groupListQuery.isPending && list.length === 0 && (
                    <EmptyList Icon={QuizbookSvg} />
                )}
                {list.map((data) => (
                    <GroupCard key={data._id} data={data}>
                        <div className="flex items-center justify-between">
                            <GroupCard.Name />
                            <div className="flex items-center gap-2 md:gap-4">
                                <GroupCard.MemberCount />
                                <GroupCard.MessageCount />
                            </div>
                        </div>
                        <GroupCard.Description />
                        <div className="flex items-center justify-between">
                            <GroupCard.Owner />
                            <GroupCard.ApplyBtn />
                        </div>
                    </GroupCard>
                ))}
            </InfiniteScrollContainer>
        </div>
    )
}
