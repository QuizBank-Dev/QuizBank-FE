import { useQuizbookCardContext } from './QuizbookCardRoot'
import NoteSvg from '@/assets/svgs/note.svg'

export default function QuizCount() {
    const { quizList } = useQuizbookCardContext()

    if (!quizList) {
        return null
    }

    return (
        <div className="flex items-center text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
            <NoteSvg className="mr-1 size-5 text-gray-400" />
            <span>{quizList.length}</span>
            <span className="text-gray-400">문제</span>
        </div>
    )
}
