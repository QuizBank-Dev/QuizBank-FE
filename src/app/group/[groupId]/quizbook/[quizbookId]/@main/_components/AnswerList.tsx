import { SolvedCard } from '@/components/study'
import { QuizType } from '@/types/quiz'

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

const dataList = [
    {
        _id: '68003e7b56ae18a5b75151cf',
        type: '주관식' as QuizType,
        question:
            '다음 설명에 해당하는 용어는 무엇인가요? 연결 지향적이고 신뢰성이 높은 전송 프로토콜로, 패킷 순서 보장과 오류 제어 기능을 제공합니다.',
        answer: 'TCP',
        optionList: [],
    },
    {
        _id: '68003e7b56ae18a5b75151ce',
        type: '주관식' as QuizType,
        question:
            '다음 설명에 해당하는 용어는 무엇인가요? 연결 지향적이고 신뢰성이 높은 전송 프로토콜로, 패킷 순서 보장과 오류 제어 기능을 제공합니다.',
        answer: 'TCP',
        optionList: [],
    },
]

export default function AnswerList({ quizId }: { quizId: string }) {
    return (
        <div className="flex w-full flex-col gap-4 px-4 md:gap-8 md:px-8 md:pb-4">
            {answerList.map((data, index) => (
                <SolvedCard
                    key={data.owner._id}
                    data={data}
                    quiz={dataList[index]}
                    role={'user'}
                />
            ))}
        </div>
    )
}
