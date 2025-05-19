'use client'

import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import { LoopAnimation } from '@/components'
import { Quiz } from '@/types/quiz'
import { useInfiniteCommentList } from '@/hooks/queries/comment'
import { useInfiniteScrollTrigger } from '@/hooks/useInfiniteScrollTrigger'

interface Props {
    quiz: Quiz
    ref: React.RefObject<HTMLDivElement | null>
    onClickRecomment: (comment: Comment) => void
}

export default function CommentListView({
    ref,
    quiz,
    onClickRecomment,
}: Props) {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useInfiniteCommentList(quiz._id)
    const commentList = data?.pages.flatMap((p) => p.data) ?? []

    const triggerRef = useInfiniteScrollTrigger({
        rootRef: ref,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    })

    return (
        <>
            {commentList.map((comment) => (
                <CommentItem
                    key={comment._id}
                    comment={comment}
                    onClickComment={() => onClickRecomment(comment)}
                />
            ))}
            <div ref={triggerRef} className="h-[1px]" />
            {isFetchingNextPage && (
                <div className="flex items-center justify-center">
                    <div className="size-6 animate-spin">
                        <LoopAnimation />
                    </div>
                </div>
            )}
        </>
    )
}
