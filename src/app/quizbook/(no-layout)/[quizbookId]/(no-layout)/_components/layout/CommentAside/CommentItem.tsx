'use client'

import RightArrowSvg from '@/assets/svgs/right-arrow.svg'
import { ProfileImage } from '@/components'
import { Comment } from '@/types/comment'
import { extractKSTDateOnly } from '@/utils/date/dateOnly'
import clsx from 'clsx'
import CommentMenuBtn from './CommentMenuBtn'
import { useCurrentUser } from '@/hooks/queries/user'

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
    const { data: user } = useCurrentUser()

    return (
        <div
            onClick={onClickComment}
            className={clsx('flex flex-col gap-[8px] p-[16px] md:gap-[16px]', {
                'bg-point-50': isTopComment,
                'cursor-pointer': onClickComment,
            })}
        >
            <div className="flex items-start gap-[16px]">
                <ProfileImage
                    size={32}
                    profileImg={comment.author.profileImg}
                />
                <div className="flex-1">
                    <div className="flex items-center gap-[8px]">
                        <span className="text-mobile-body-md font-semi-bold text-gray-600 md:text-pc-body-md">
                            {comment.author.nickname}
                        </span>
                        <span className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                            {extractKSTDateOnly(comment.updatedAt)}
                        </span>
                    </div>
                    <p
                        style={{ overflowWrap: 'anywhere' }}
                        className="whitespace-pre-line break-words text-mobile-body-md md:text-pc-body-md"
                    >
                        {comment.content}
                    </p>
                </div>
                {user?._id === comment.author._id && (
                    <CommentMenuBtn comment={comment} />
                )}
            </div>
            {comment.recommentCount && !isTopComment ? (
                <div className="flex items-center gap-[16px] text-mobile-body-sm md:text-pc-body-sm">
                    <div className="w-[32px]" />
                    <div className="flex items-center gap-[4px]">
                        <span>{`답글 ${comment.recommentCount}개`}</span>
                        <RightArrowSvg className="size-5" />
                    </div>
                </div>
            ) : null}
        </div>
    )
}
