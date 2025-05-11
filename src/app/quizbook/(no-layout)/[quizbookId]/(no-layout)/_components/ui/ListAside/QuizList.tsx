'use client'

import { Quiz } from '@/types/quiz'
import QuizListItem from './QuizListItem'
import { getAnswerStore, getQuestionStore } from '@/store/quizbook'

interface Props {
    quizList: Quiz[]
    quizbookId: string
}

export default function QuizList({ quizList, quizbookId }: Props) {
    const questionStore = getQuestionStore(quizbookId)
    const curIdx = questionStore((s) => s.curIdx)
    const setCurIdx = questionStore((s) => s.setCurIdx)

    const answerStore = getAnswerStore(quizbookId)
    const answerMap = answerStore((s) => s.answerMap)

    return (
        <ul className="md:overflow-y-auto">
            {quizList.map((q, idx) => (
                <QuizListItem
                    key={`list-${idx}`}
                    idx={idx + 1}
                    content={q.question}
                    isSolved={answerMap[q._id] ? true : false}
                    onClick={() => setCurIdx(idx + 1)}
                    curIdx={curIdx}
                />
            ))}
        </ul>
    )
}
