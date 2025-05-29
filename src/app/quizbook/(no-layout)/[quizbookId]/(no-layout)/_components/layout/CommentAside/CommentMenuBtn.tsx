'use client'

import EllipsisSvg from '@/assets/svgs/elipsis-v.svg'
import { useRef, useState } from 'react'
import CommentMenu from './CommentMenu'
import { Comment } from '@/types/comment'
import { useCommentAside } from './CommentAsideContext'
import { useDeleteComment } from '@/hooks/mutations/comment'

interface Props {
    comment: Comment
}

export default function CommentMenuBtn({ comment }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const { setEditTarget, selectedComment, setSelectedComment, setMode } =
        useCommentAside()
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleMenuOpen = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen((prev) => !prev)
    }

    const handleEdit = () => {
        setEditTarget(comment)
        setIsOpen(false)
    }

    const handleRemove = () => {
        mutate(undefined, {
            onSuccess: () => {
                if (selectedComment) {
                    if (selectedComment.recommentCount) {
                        setSelectedComment({
                            ...selectedComment,
                            content: '삭제된 댓글입니다.',
                        })
                    } else {
                        setSelectedComment(null)
                        setMode('list')
                    }
                }

                setIsOpen(false)
            },
        })
    }

    const { mutate } = useDeleteComment(
        comment._id,
        comment.quiz,
        selectedComment?._id,
    )

    return (
        <div className="relative self-start">
            <button ref={buttonRef} onClick={handleMenuOpen}>
                <EllipsisSvg className="size-6" />
            </button>
            {isOpen && (
                <CommentMenu
                    onEdit={handleEdit}
                    onRemove={handleRemove}
                    onClose={() => setIsOpen(false)}
                    buttonRef={buttonRef}
                />
            )}
        </div>
    )
}
