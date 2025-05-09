import clsx from 'clsx'

interface Props {
    answer: string
    correct: string
    optionList: string[]
}

export default function MultipleAnswerCard({
    answer,
    correct,
    optionList,
}: Props) {
    return (
        <div className="flex flex-1 flex-col justify-center gap-[8px] md:gap-[10px]">
            {optionList.map((opt, idx) => {
                const isCorrect = opt === correct
                const isWrong = opt === answer && answer !== correct
                return (
                    <div
                        key={`option-${idx}`}
                        className={clsx(
                            'flex w-full items-center gap-[8px] rounded-lg border-2 px-[16px] py-[8px]',
                            'md:px-[32px] md:py-[16px]',
                            {
                                'border-point-500': isCorrect,
                                'border-danger-300': isWrong,
                                'border-gray-200': !isCorrect && !isWrong,
                            },
                        )}
                    >
                        <span className="w-[16px] text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                            {idx + 1}.
                        </span>
                        <span className="text-mobile-body-md md:text-pc-body-md">
                            {opt}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
