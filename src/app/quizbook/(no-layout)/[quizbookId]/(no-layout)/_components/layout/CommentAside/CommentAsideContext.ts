'use client'

import { createContext, useContext } from 'react'
import { Comment } from '@/types/comment'

interface CommentAsideContextValue {
    editTarget: Comment | null
    setEditTarget: (comment: Comment | null) => void
    selectedComment: Comment | null
    setSelectedComment: (comment: Comment | null) => void
    setMode: (mode: 'list' | 'detail') => void
}

const CommentAsideContext = createContext<CommentAsideContextValue | null>(null)

export const useCommentAside = () => {
    const ctx = useContext(CommentAsideContext)

    if (!ctx)
        throw new Error(
            'useCommentAside는 CommentAsideProvider 하위에서 사용 되어야 합니다.',
        )

    return ctx
}

export default CommentAsideContext
