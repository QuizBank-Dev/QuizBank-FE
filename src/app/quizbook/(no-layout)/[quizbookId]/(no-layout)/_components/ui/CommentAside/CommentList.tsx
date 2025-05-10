'use client'

import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import clsx from 'clsx'

interface Props {
    commentList: Comment[]
    onClickRecomment?: (comment: Comment) => void
    className?: string
}

export default function CommentList({
    commentList,
    onClickRecomment,
    className = '',
}: Props) {
    return (
        <section
            className={clsx(
                'mb-[68px] flex-1 overflow-y-auto md:mb-[0px]',
                className,
            )}
        >
            {commentList.map((comment) => (
                <CommentItem
                    key={comment._id}
                    comment={comment}
                    onClickComment={
                        onClickRecomment && (() => onClickRecomment(comment))
                    }
                />
            ))}
        </section>
    )
}
