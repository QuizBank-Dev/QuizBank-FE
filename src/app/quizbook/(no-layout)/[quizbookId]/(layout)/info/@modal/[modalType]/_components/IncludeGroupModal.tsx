'use client'

import { InfiniteScrollContainer, Modal } from '@/components'
import { useGroupListQuery } from '@/hooks/queries/group'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

export default function IncludeGroupModal() {
    const { quizbookId } = useParams()
    const { groupListQuery } = useGroupListQuery('my', 5)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const list = groupListQuery.data?.pages.flatMap((page) => page.list) ?? []

    return (
        <Modal title="그룹 선택" closeOnOverlayClick={true}>
            <div className="flex flex-col items-center gap-4">
                <div
                    ref={scrollContainerRef}
                    className="custom-scrollbar flex h-[200px] w-full flex-col items-center gap-8 overflow-auto rounded-lg border-2 border-gray-200 bg-point-50 p-4 md:p-8"
                >
                    <InfiniteScrollContainer
                        isPending={groupListQuery.isPending}
                        hasNextPage={groupListQuery.hasNextPage}
                        isFetchingNextPage={groupListQuery.isFetchingNextPage}
                        fetchNextPage={groupListQuery.fetchNextPage}
                        className={'flex flex-col gap-4'} // 옵션
                        rootRef={scrollContainerRef} // 필요
                    >
                        {list.length === 0 ? (
                            <span className="text-mobile-body-md font-semi-bold text-gray-500 md:text-pc-body-md">
                                소속된 그룹이 없습니다!
                            </span>
                        ) : (
                            list.map((data) => (
                                <Link
                                    key={data._id}
                                    className="cursor-pointer text-center text-mobile-body-md font-semi-bold md:text-pc-body-md"
                                    href={`/quizbook/${quizbookId}/info/check-group/${data._id}`}
                                >
                                    {data.name}
                                </Link>
                            ))
                        )}
                    </InfiniteScrollContainer>
                </div>
                <Link
                    href={`/group`}
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                >
                    그룹 검색 페이지로 이동
                </Link>
            </div>
        </Modal>
    )
}
