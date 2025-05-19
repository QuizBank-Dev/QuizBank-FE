'use client'

import CommentSvg from '@/assets/svgs/comment.svg'

import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import { EmptyList, LoopAnimation } from '@/components'
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
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
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
            {!isPending && commentList.length === 0 && (
                <div className="pt-[16px] md:pt-[32px]">
                    <EmptyList
                        Icon={CommentSvg}
                        text="작성된 댓글이 존재하지 않습니다."
                    />
                </div>
            )}
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
