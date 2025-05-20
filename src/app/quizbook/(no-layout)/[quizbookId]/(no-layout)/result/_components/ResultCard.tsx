import { DonutProgressbar } from '@/components/study'

interface ResultCardProps {
    score: number
    totalScore: number
    children: React.ReactNode
}

export default function ResultCard({
    score,
    totalScore,
    children,
}: ResultCardProps) {
    return (
        <article className="relative pb-[125px] md:pb-[200px]">
            <div className="min-h-[200px] rounded-bl-lg rounded-br-lg bg-point-500 md:min-h-[300px]" />

            <div className="absolute top-[75px] w-full px-[16px] md:top-[100px] md:px-[32px]">
                <div className="relative">
                    {/* 모바일 용 도넛 */}
                    <div className="absolute -top-[50px] left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full md:hidden">
                        <DonutProgressbar
                            ratio={score / totalScore}
                            size={100}
                            strokeWidth={14}
                        >
                            <div className="flex flex-col items-center justify-center gap-[8px] text-mobile-title-sm font-semi-bold">
                                {Math.floor((score / totalScore) * 100)}%
                            </div>
                        </DonutProgressbar>
                    </div>

                    {/* PC 용 도넛 */}
                    <div className="absolute -top-[75px] left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center rounded-full md:flex">
                        <DonutProgressbar
                            ratio={score / totalScore}
                            size={150}
                            strokeWidth={18}
                        >
                            <div className="flex flex-col items-center justify-center gap-[8px] text-pc-title-sm font-semi-bold">
                                {Math.floor((score / totalScore) * 100)}%
                            </div>
                        </DonutProgressbar>
                    </div>

                    {/* 카드 영역 */}
                    <div className="flex max-h-[250px] min-h-[250px] flex-col items-center justify-center rounded-lg bg-white px-[16px] py-[16px] shadow-point md:max-h-[400px] md:min-h-[400px] md:px-[32px]">
                        {children}
                    </div>
                </div>
            </div>
        </article>
    )
}
