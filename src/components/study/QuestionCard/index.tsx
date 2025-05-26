// SVG
import QuestionSvg from '@/assets/svgs/question.svg'
import LeftArrowSvg from '@/assets/svgs/left-arrow.svg'
import RightArrowSvg from '@/assets/svgs/right-arrow.svg'

import DonutProgressbar from '@/components/study/DonutProgressbar'
import clsx from 'clsx'
import { Quiz } from '@/types/quiz'
import ScoreTag from './ScoreTag'
import QuizLikeBtn from './QuizLikeBtn'

interface QuestionCardProps {
    quiz: Quiz
    curIdx: number
    totalIdx: number
    background?: boolean
    onPrev: () => void
    onNext: () => void
    onLikeBtn?: boolean
    isLiked?: boolean
}

export default function QuestionCard({
    quiz,
    curIdx,
    totalIdx,
    background,
    onPrev,
    onNext,
    onLikeBtn,
    isLiked,
}: QuestionCardProps) {
    return (
        <article
            className={clsx(
                'relative',
                background !== false
                    ? 'pb-[125px] md:pb-[200px]'
                    : 'pb-[300px] md:pb-[475px]',
            )}
        >
            {background !== false && (
                <div className="min-h-[200px] rounded-bl-lg rounded-br-lg bg-point-500 md:min-h-[300px]" />
            )}
            <div
                className={clsx(
                    'absolute w-full',
                    background !== false
                        ? 'top-[75px] px-[16px] md:top-[100px] md:px-[32px]'
                        : 'top-[50px] px-0 md:top-[75px] md:px-0',
                )}
            >
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
                    <div className="flex max-h-[250px] min-h-[250px] flex-col rounded-lg bg-white px-[16px] py-[16px] shadow-point md:max-h-[400px] md:min-h-[400px] md:px-[32px]">
                        <div className="mb-[8px] flex justify-between md:mb-[32px]">
                            <ScoreTag type={quiz.type} />
                            {onLikeBtn && (
                                <QuizLikeBtn
                                    quizId={quiz._id}
                                    initState={isLiked ?? false}
                                />
                            )}
                        </div>
                        <div className="grid flex-1 place-items-center overflow-y-auto">
                            <p
                                style={{ overflowWrap: 'anywhere' }}
                                className="whitespace-pre-line break-words text-center text-mobile-body-lg font-semi-bold md:text-pc-body-lg"
                            >
                                {quiz.question}
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-[8px] text-point-200">
                            {curIdx <= 1 ? (
                                <div />
                            ) : (
                                <button
                                    className="flex items-center justify-center text-mobile-body-lg hover:text-point-500 md:text-pc-body-lg"
                                    onClick={onPrev}
                                >
                                    <LeftArrowSvg className="h-[20px] w-[20px]" />
                                    이전
                                </button>
                            )}
                            {totalIdx <= curIdx ? (
                                <div />
                            ) : (
                                <button
                                    className="flex items-center justify-center text-mobile-body-lg hover:text-point-500 md:text-pc-body-lg"
                                    onClick={onNext}
                                >
                                    다음
                                    <RightArrowSvg className="h-[20px] w-[20px]" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
