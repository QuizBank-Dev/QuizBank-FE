import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface RecentQuizbookMeta {
    _id: string
    title: string
    category: string
    count: number
}

interface RecentQuizbookStore {
    recent: RecentQuizbookMeta | null
    addRecent: (meta: RecentQuizbookMeta) => void
    reset: () => void
}

const useRecentQuizbookStore = create(
    persist<RecentQuizbookStore>(
        (set) => ({
            recent: null,
            addRecent: (meta) =>
                set({
                    recent: meta,
                }),
            reset: () => {
                set({ recent: null })
            },
        }),
        {
            name: 'recent-quizbook',
        },
    ),
)

export default useRecentQuizbookStore
