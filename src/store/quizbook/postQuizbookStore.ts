import { AddQuizFormData, PostQuizbookFormData } from '@/types/schemas/quizbook'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type PostQuizbookStoreState = Partial<PostQuizbookFormData> & {
    hydrated: boolean
}

type PostQuizbookStoreActions = {
    setMeta: (meta: Partial<PostQuizbookFormData>) => void
    addQuiz: (quiz: AddQuizFormData) => void
    removeQuiz: (idx: number) => void
    reset: () => void
    setHydrated: (value: boolean) => void
}

const usePostQuizbookStore = create(
    persist<PostQuizbookStoreState & PostQuizbookStoreActions>(
        (set) => ({
            hydrated: false,
            title: '',
            description: '',
            category: undefined,
            quizList: [],
            setMeta: (meta) => set((state) => ({ ...state, ...meta })),
            addQuiz: (quiz) =>
                set((state) => ({
                    quizList: [...(state.quizList ?? []), quiz],
                })),
            removeQuiz: (idx) =>
                set((state) => ({
                    quizList: state.quizList?.filter((_, i) => i !== idx),
                })),
            reset: () => {
                set({
                    title: '',
                    description: '',
                    category: undefined,
                    quizList: [],
                })

                if (typeof window !== 'undefined') {
                    localStorage.removeItem('post-quizbook')
                }
            },
            setHydrated: (v) => set({ hydrated: v }),
        }),
        {
            name: 'post-quizbook',
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true)
            },
        },
    ),
)

export default usePostQuizbookStore
