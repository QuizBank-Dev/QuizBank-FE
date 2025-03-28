'use client'

import { createContext, useContext } from 'react'
import { Quizbook } from '@/types/quizbook'

export type QuizbookCardContextProps = Partial<Quizbook> & { id: string }

export const QuizbookCardContext =
    createContext<QuizbookCardContextProps | null>(null)

export const useQuizbookCardContext = () => {
    const context = useContext(QuizbookCardContext)
    if (!context) {
        throw new Error('QuizbookCard 하위에 작성되어야하는 컴포넌트입니다.')
    }
    return context
}
