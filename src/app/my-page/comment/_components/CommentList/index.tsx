'use client'

import { useMyCommentQuery } from '@/hooks/queries/comment'
import { EmptyList, InfiniteScrollContainer } from '@/components'
import CommentItem from './CommentItem'
import CommentItemSkeleton from './CommentItemSkeleton'
import CommentSvg from '@/assets/svgs/comment.svg'

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
                {!isPending && commentList.length === 0 && (
                    <EmptyList
                        Icon={CommentSvg}
                        text="작성한 댓글이 존재하지 않습니다."
                    />
                )}
                {commentList.map((comment) => (
                    <CommentItem key={comment._id} {...comment} />
                ))}
            </InfiniteScrollContainer>
        </>
    )
}
