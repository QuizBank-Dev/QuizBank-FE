interface SolvedCardProps {
    user: {
        profileUrl: string
        nickname: string
    }
    answer: string
    score: number
}

export default function SolvedCard({ user, answer, score }: SolvedCardProps) {
    return (
        <article className="flex max-h-[200px] min-h-[200px] flex-col gap-[8px] rounded-lg bg-white p-[16px] shadow-point md:max-h-[300px] md:min-h-[300px] md:px-[32px]">
            {/* 상단 타이틀 */}
            <div className="flex items-center">
                <div className="w-[35px]" />
                <h3 className="flex flex-1 items-center justify-center gap-[4px] text-pc-body-lg font-semi-bold md:text-pc-body-lg">
                    <div className="flex items-center gap-[4px]">
                        {/* 프로필 이미지 */}
                        <div className="h-[32px] w-[32px] rounded-full bg-gray-300" />
                        <span className="text-point-500">{user.nickname}</span>
                    </div>
                    님의 답안
                </h3>
                <span className="w-[35px] text-center text-mobile-body-md font-semi-bold md:text-pc-body-md">
                    {score}점
                </span>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="custom-scrollbar grid flex-1 place-items-center overflow-y-auto">
                <p className="whitespace-pre-line break-words text-center text-mobile-body-md md:text-pc-body-md">
                    {answer}
                </p>
            </div>
        </article>
    )
}
