import { QUIZ_TYPE } from '@/constants/quiz'
import { Quiz } from '@/types/quiz'
import OXAnswerCard from './OXAnswerCard'
import MultipleAnswerCard from './MultipleAnswerCard'
import ShortAnswerCard from './ShortAnswerCard'
import LongAnswerCard from './LongAnswerCard'

interface Props {
    data?: {
        answer: string
        score: number
        owner: {
            _id: string
            nickname: string
            profileImg: string
        }
    }
    role: 'ai' | 'user'
    quiz: Quiz
}

export default function SolvedCard({ data, role, quiz }: Props) {
    const render = () => {
        const { type, answer: correct, optionList } = quiz
        switch (type) {
            case QUIZ_TYPE.OX:
                return (
                    <OXAnswerCard
                        answer={data ? data.answer : correct!}
                        correct={correct!}
                    />
                )
            case QUIZ_TYPE.MULTIPLE:
                return (
                    <MultipleAnswerCard
                        answer={data ? data.answer : correct!}
                        correct={correct!}
                        optionList={optionList || []}
                    />
                )
            case QUIZ_TYPE.SHORT:
                return (
                    <ShortAnswerCard answer={data ? data.answer : correct!} />
                )
            case QUIZ_TYPE.LONG:
                return <LongAnswerCard answer={data ? data.answer : correct!} />
        }
    }
    return (
        <article className="flex max-h-[250px] min-h-[250px] flex-col gap-[8px] rounded-lg bg-white p-[16px] shadow-point md:max-h-[400px] md:min-h-[400px] md:p-[32px]">
            {/* 상단 타이틀 */}
            {role === 'user' && data ? (
                <div className="flex items-center">
                    <div className="w-[35px]" />
                    <h3 className="text-pc-mobile-lg flex flex-1 items-center justify-center gap-[4px] font-semi-bold md:text-pc-body-lg">
                        <div className="flex items-center gap-[4px]">
                            {/* 프로필 이미지 */}
                            <div className="h-[32px] w-[32px] rounded-full bg-gray-300" />
                            <span className="text-point-500">
                                {data.owner.nickname}
                            </span>
                        </div>
                        님의 답안
                    </h3>
                    <span className="w-[35px] text-center text-mobile-body-md font-semi-bold md:text-pc-body-md">
                        {data.score}점
                    </span>
                </div>
            ) : (
                <div className="text-pc-mobile-lg flex items-center justify-center gap-[4px] font-semi-bold md:text-pc-body-lg">
                    <span className="text-point-500">AI</span>
                    <span>답안</span>
                </div>
            )}

            {/* 컨텐츠 영역 */}
            {render()}
        </article>
    )
}
