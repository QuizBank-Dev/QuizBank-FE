import { TypeToXp } from '@/constants/quiz'
import { QuizResult } from '@/types/study'
import { BookMarkBtn } from '.'

interface Props {
    quizList: QuizResult[]
}

export default function ResultTable({ quizList }: Props) {
    return (
        <div className="w-full rounded-lg bg-white text-mobile-body-lg font-semi-bold shadow-point md:text-pc-body-lg">
            {/* 헤더 영역 */}
            <div className="grid grid-cols-[1fr_3fr_1fr_1fr] border-y border-gray-200 md:grid-cols-[1fr_4fr_1fr_1fr]">
                <div className="flex items-center justify-center p-[16px]">
                    번호
                </div>
                <div className="flex items-center justify-center p-[16px]">
                    문제
                </div>
                <div className="flex items-center justify-center p-[16px]">
                    점수
                </div>
            </div>

            {/* 데이터 영역 */}
            {quizList.map((quiz, idx) => (
                <div
                    key={quiz._id}
                    className="grid grid-cols-[1fr_3fr_1fr_1fr] border-b text-mobile-body-lg font-semi-bold md:grid-cols-[1fr_4fr_1fr_1fr] md:text-pc-body-lg"
                >
                    <div className="flex items-center justify-center p-[16px]">
                        {idx + 1}
                    </div>
                    <div className="flex items-center p-[16px]">
                        {quiz.question}
                    </div>
                    <div className="flex items-center justify-center p-[16px]">
                        <span>{quiz.score}</span>/
                        <span className="text-gray-400">
                            {TypeToXp[quiz.type]}
                        </span>
                    </div>
                    <div className="flex items-center justify-center p-[16px]">
                        <BookMarkBtn
                            quizId={quiz._id}
                            initState={quiz.isLiked}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
