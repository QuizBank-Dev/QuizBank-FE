import DonutProgressbar from '@/components/study/DonutProgressbar'
import ScoreTag from './ScoreTag'

// SVG
import QuestionSvg from '@/assets/svgs/question.svg'
import LeftArrowSvg from '@/assets/svgs/left-arrow.svg'
import RightArrowSvg from '@/assets/svgs/right-arrow.svg'

interface QuestionCardProps {
    quiz: {
        type: '객관식' | '주관식' | '서술형' | 'ox'
        question: string
    } // 나중에 API 데이터 응답 타입으로 변경
    curIdx: number
    totalIdx: number
    onPrev: () => void
    onNext: () => void
}

export default function QuestionCard({
    quiz,
    curIdx,
    totalIdx,
    onPrev,
    onNext,
}: QuestionCardProps) {
    return (
        <article className="relative pb-[100px] md:pb-[200px]">
            <div className="min-h-[175px] rounded-lg bg-point-500 md:min-h-[300px]" />
            <div className="absolute top-[75px] w-full px-[16px] md:top-[100px] md:px-[32px]">
                <div className="relative">
                    {/* 모바일 용 도넛 */}
                    <div className="absolute -top-[50px] left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full md:hidden">
                        <DonutProgressbar
                            ratio={curIdx / totalIdx}
                            size={100}
                            strokeWidth={14}
                        >
                            <div className="flex flex-col items-center justify-center gap-[8px]">
                                <QuestionSvg className="h-[20px] w-[20px]" />
                                <span className="text-mobile-body-lg font-semi-bold">{`${curIdx} / ${totalIdx}`}</span>
                            </div>
                        </DonutProgressbar>
                    </div>

                    {/* PC 용 도넛 */}
                    <div className="absolute -top-[75px] left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center rounded-full md:flex">
                        <DonutProgressbar
                            ratio={curIdx / totalIdx}
                            size={150}
                            strokeWidth={18}
                        >
                            <div className="flex flex-col items-center justify-center gap-[8px]">
                                <QuestionSvg className="h-[25px] w-[25px]" />
                                <span className="text-pc-body-lg font-semi-bold">{`${curIdx} / ${totalIdx}`}</span>
                            </div>
                        </DonutProgressbar>
                    </div>

                    {/* 카드 영역 */}
                    <div className="flex max-h-[200px] min-h-[200px] flex-col rounded-lg bg-white px-[16px] py-[16px] shadow-point md:max-h-[400px] md:min-h-[400px] md:px-[32px]">
                        <div className="mb-[8px] md:mb-[32px]">
                            <ScoreTag type={quiz.type} />
                        </div>
                        <div className="custom-scrollbar grid flex-1 place-items-center overflow-y-auto">
                            <p className="whitespace-pre-line break-words text-center text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                                {quiz.question}
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-[8px] text-point-200">
                            <button
                                className="flex items-center justify-center text-mobile-body-lg hover:text-point-500 md:text-pc-body-lg"
                                onClick={onPrev}
                            >
                                <LeftArrowSvg className="h-[20px] w-[20px]" />
                                이전
                            </button>
                            <button
                                className="flex items-center justify-center text-mobile-body-lg hover:text-point-500 md:text-pc-body-lg"
                                onClick={onNext}
                            >
                                다음
                                <RightArrowSvg className="h-[20px] w-[20px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
