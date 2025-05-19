'use client'

import CommentSvg from '@/assets/svgs/comment.svg'

import { useInfiniteRecommentList } from '@/hooks/queries/comment'
import { useInfiniteScrollTrigger } from '@/hooks/useInfiniteScrollTrigger'
import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import { EmptyList, LoopAnimation } from '@/components'

interface Props {
    ref: React.RefObject<HTMLDivElement | null>
    comment: Comment
}

export default function RecommentListView({ ref, comment }: Props) {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isPending } =
        useInfiniteRecommentList(comment._id)
    const recommentList = data?.pages.flatMap((p) => p.data) ?? []

    const triggerRef = useInfiniteScrollTrigger({
        rootRef: ref,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    })

    return (
        <>
            {!isPending && recommentList.length === 0 && (
                <div className="pt-[16px] md:pt-[32px]">
                    <EmptyList
                        Icon={CommentSvg}
                        text="작성된 댓글이 존재하지 않습니다."
                    />
                </div>
            )}
            {!isPending && (
                <div className="pl-[16px] md:pl-[32px]">
                    {recommentList.map((recomment) => (
                        <CommentItem key={recomment._id} comment={recomment} />
                    ))}
                    <div ref={triggerRef} className="h-[1px]" />
                    {isFetchingNextPage && (
                        <div className="flex items-center justify-center">
                            <div className="size-6 animate-spin">
                                <LoopAnimation />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
