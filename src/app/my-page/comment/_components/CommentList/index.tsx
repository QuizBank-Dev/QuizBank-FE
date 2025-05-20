'use client'

import { useMyCommentQuery } from '@/hooks/queries/comment'
import { InfiniteScrollContainer } from '@/components'
import CommentItem from './CommentItem'
import CommentItemSkeleton from './CommentItemSkeleton'

export default function CommentList() {
    const {
        data: { commentList, totalCount },
        isPending,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useMyCommentQuery()

    return (
        <>
            <span className="text-mobile-body-lg md:text-pc-body-lg">
                {!isPending && (
                    <span className="font-bold text-point-500">
                        {totalCount}
                    </span>
                )}
                개
            </span>
            <InfiniteScrollContainer
                className="flex flex-col gap-4"
                isPending={isPending}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                SkeletonUI={<CommentItemSkeleton />}
            >
                {commentList.map((comment) => (
                    <CommentItem key={comment._id} {...comment} />
                ))}
            </InfiniteScrollContainer>
        </>
    )
}
