import { create, StoreApi, UseBoundStore } from 'zustand'
import { persist } from 'zustand/middleware'

interface AnswerStore {
    answerMap: Record<string, string>
    setAnswer: (quizId: string, answer: string) => void
    reset: () => void
}

type AnswerStoreType = UseBoundStore<StoreApi<AnswerStore>>

const storeMap = new Map<string, AnswerStoreType>()

const getAnswerStore = (quizbookId: string) => {
    if (!storeMap.has(quizbookId)) {
        const store = create(
            persist<AnswerStore>(
                (set) => ({
                    answerMap: {},
                    setAnswer: (quizId, answer) =>
                        set((state) => ({
                            answerMap: {
                                ...state.answerMap,
                                [quizId]: answer,
                            },
                        })),
                    reset: () => {
                        set({ answerMap: {} })
                        if (typeof window !== 'undefined') {
                            localStorage.removeItem(
                                `quizbook-answer-list-${quizbookId}`,
                            )
                        }
                    },
                }),
                {
                    name: `quizbook-answer-list-${quizbookId}`,
                },
            ),
        )
        storeMap.set(quizbookId, store)

        return store
    }

    return storeMap.get(quizbookId)!
}

export default getAnswerStore
