import { AddQuizFormData } from '@/types/schemas/quizbook/add-quiz.schema'
import { create } from 'zustand'

interface PostQuizbookStore {
    quizList: AddQuizFormData[]
    addQuiz: (quiz: AddQuizFormData) => void
    removeQuiz: (idx: number) => void
    resetQuizList: () => void
}

const usePostQuizbookStore = create<PostQuizbookStore>((set) => ({
    quizList: [],
    addQuiz: (quiz) =>
        set((state) => ({ quizList: [...state.quizList, quiz] })),
    removeQuiz: (idx) =>
        set((state) => ({
            quizList: state.quizList.filter((_, i) => i !== idx),
        })),
    resetQuizList: () => set({ quizList: [] }),
}))

export default usePostQuizbookStore
