import { create, StoreApi, UseBoundStore } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuestionStore {
    curIdx: number
    setCurIdx: (idx: number) => void
    next: (total: number) => void
    prev: () => void
    reset: () => void
}

type QuestionStoreType = UseBoundStore<StoreApi<QuestionStore>>

const questionStoreMap = new Map<string, QuestionStoreType>()

const getQuestionStore = (quizbookId: string) => {
    if (!questionStoreMap.has(quizbookId)) {
        const store = create(
            persist<QuestionStore>(
                (set) => ({
                    curIdx: 1,
                    setCurIdx: (idx) => set({ curIdx: idx }),
                    next: (total) =>
                        set((state) => ({
                            curIdx: Math.min(state.curIdx + 1, total),
                        })),
                    prev: () =>
                        set((state) => ({
                            curIdx: Math.max(state.curIdx - 1, 1),
                        })),
                    reset: () => set({ curIdx: 1 }),
                }),
                { name: `quizbook-question-state-${quizbookId}` },
            ),
        )

        questionStoreMap.set(quizbookId, store)
        return store
    }

    return questionStoreMap.get(quizbookId)!
}

export default getQuestionStore
