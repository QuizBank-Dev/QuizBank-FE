'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CommentInput from './CommentInput'

interface Props {
    quizId: string
    commentId?: string
}

export default function CommentInputPortal({ quizId, commentId }: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return createPortal(
        <div className="fixed bottom-0 left-0 z-[99999] w-full md:hidden">
            <CommentInput quizId={quizId} commentId={commentId} />
        </div>,
        document.body,
    )
}
