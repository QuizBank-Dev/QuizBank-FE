import { SolvedCard } from '@/components/study'
import { Quiz } from '@/types/quiz'
import { SolvedAnswer } from '@/types/study'

interface Props {
    quiz: Quiz
    answerList: SolvedAnswer[]
}

export default function AnswerList({ quiz, answerList }: Props) {
    return (
        <div className="flex w-full flex-col gap-4 px-4 md:gap-8 md:px-8 md:pb-4">
            {answerList.map((data) => (
                <SolvedCard
                    key={data.owner._id}
                    data={data}
                    quiz={quiz}
                    role={'user'}
                />
            ))}
        </div>
    )
}
