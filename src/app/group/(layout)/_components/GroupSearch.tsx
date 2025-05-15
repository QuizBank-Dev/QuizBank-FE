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
import GroupCardSkeleton from './GroupCardSkeleton'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function GroupSearch() {
    const { groupListQuery, setName, setTheme } = useGroupListQuery('total', 5)

    // 무한스크롤을 위한 ref
    const bottomRef = useRef<HTMLDivElement>(null)

    // Intersection Observer 등록
    useEffect(() => {
        if (!bottomRef.current) return

        const observer = new IntersectionObserver(
            async (entries) => {
                if (
                    entries[0].isIntersecting &&
                    groupListQuery.hasNextPage &&
                    !groupListQuery.isFetchingNextPage
                ) {
                    await groupListQuery.fetchNextPage()
                }
            },
            {
                root: null,
                threshold: 1,
            },
        )
        observer.observe(bottomRef.current)

        return () => observer.disconnect()
    }, [groupListQuery])

    const list = groupListQuery.data?.pages.flatMap((page) => page.list) ?? []

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const name = formData.get('name')?.toString() ?? ''
        const theme = formData.get('theme')?.toString() ?? 'total'

        setName(name)
        setTheme(theme)
    }

    return (
        <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-4" onSubmit={handleSearch}>
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
                    <div className="flex items-center gap-4">
                        <Select
                            name="theme"
                            defaultValue="total"
                            onValueChange={(value) => {
                                setTheme(value)
                            }}
                        >
                            <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="total">모든 그룹</SelectItem>
                                <SelectItem value="my">나의 그룹</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                            {groupListQuery.data
                                ? (
                                      list.length +
                                      groupListQuery.data.pages[
                                          groupListQuery.data.pages.length - 1
                                      ].leftCount
                                  ).toLocaleString('en-US')
                                : '--'}
                            개의 결과
                        </div>
                    </div>
                    <Link
                        className="btn-solid btn-mobile-sm md:btn-pc-md"
                        href={'/group/new'}
                    >
                        그룹 생성
                    </Link>
                </div>
            </form>

            {groupListQuery.isPending ? (
                <GroupCardSkeleton />
            ) : (
                list.map((data) => (
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
                ))
            )}
            {/* 최하단 감지용 div */}
            <div
                ref={bottomRef}
                className="w-full text-center text-mobile-body-lg font-semi-bold md:text-pc-body-lg"
            >
                {groupListQuery.isFetchingNextPage && '로딩 중...'}
            </div>
        </div>
    )
}
