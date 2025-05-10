'use client'

import EllipsisVSvg from '@/assets/svgs/elipsis-v.svg'
import RightArrowSvg from '@/assets/svgs/right-arrow.svg'
import { Comment } from '@/types/comment'
import clsx from 'clsx'

interface Props {
    comment: Comment
    isTopComment?: boolean
    onClickComment?: () => void
}

export default function CommentItem({
    comment,
    isTopComment = false,
    onClickComment,
}: Props) {
    return (
        <div
            className={clsx('flex flex-col gap-[16px] p-[16px]', {
                'bg-point-50': isTopComment,
            })}
        >
            <div className="flex items-start gap-[16px]">
                <div className="size-8 rounded-full bg-gray-300" />
                <div className="flex-1">
                    <div className="flex items-center gap-[8px]">
                        <span className="text-mobilebody-md text-pc-body-md font-semi-bold text-gray-600">
                            {comment.author.nickname}
                        </span>
                        <span className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                            {comment.updatedAt}
                        </span>
                    </div>
                    <p
                        style={{ overflowWrap: 'anywhere' }}
                        className="whitespace-pre-line break-words text-pc-body-sm"
                    >
                        {comment.content}
                    </p>
                </div>
                <button className="flex self-start">
                    <EllipsisVSvg className="size-6" />
                </button>
            </div>
            {comment.recommentCount && !isTopComment ? (
                <button
                    onClick={onClickComment}
                    className="flex items-center gap-[16px]"
                >
                    <div className="w-[32px]" />
                    <div className="flex items-center gap-[4px]">
                        <span>{`답글 ${comment.recommentCount}개`}</span>
                        <RightArrowSvg className="size-5" />
                    </div>
                </button>
            ) : null}
        </div>
    )
}
