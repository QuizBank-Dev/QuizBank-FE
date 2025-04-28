import { SolvedCard } from '@/components/study'

const answerList = [
    {
        answer: 'test',
        score: 10,
        owner: {
            _id: '1',
            nickname: '쭈니1',
            profileImg: '',
        },
    },
    {
        answer: 'test',
        score: 10,
        owner: {
            _id: '2',
            nickname: '쭈니2',
            profileImg: '',
        },
    },
]

export default function AnswerList({ quizId }: { quizId: string }) {
    return (
        <div className="flex w-full flex-col gap-4 px-4 md:gap-8 md:px-8 md:pb-4">
            {answerList.map((data) => (
                <SolvedCard
                    key={data.owner._id}
                    user={{
                        nickname: data.owner.nickname,
                        profileUrl: data.owner.profileImg,
                    }}
                    answer={data.answer}
                    score={data.score}
                />
            ))}
        </div>
    )
}
