import { useInfiniteRecommentList } from '@/hooks/queries/comment'
import { useInfiniteScrollTrigger } from '@/hooks/useInfiniteScrollTrigger'
import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import { LoopAnimation } from '@/components'

interface Props {
    ref: React.RefObject<HTMLDivElement | null>
    comment: Comment
}

export default function RecommentListView({ ref, comment }: Props) {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
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
        </>
    )
}
