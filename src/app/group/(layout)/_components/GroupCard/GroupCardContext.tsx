'use client'

import { GroupCard } from '@/types/group'
import { createContext, useContext } from 'react'

export type GroupCardContextProps = Partial<GroupCard>

export const GroupCardContext = createContext<GroupCardContextProps | null>(
    null,
)

export const useGroupCardContext = () => {
    const context = useContext(GroupCardContext)
    if (!context) {
        throw new Error('GroupCard 하위에 작성되어야하는 컴포넌트입니다.')
    }
    return context
}
