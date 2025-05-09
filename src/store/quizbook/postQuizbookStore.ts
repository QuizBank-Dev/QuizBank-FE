import { PostQuiz } from '@/types/quiz'
import { create } from 'zustand'

interface PostQuizbookStore {
    quizList: PostQuiz[]
    addQuiz: (quiz: PostQuiz) => void
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
