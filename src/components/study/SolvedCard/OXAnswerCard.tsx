import clsx from 'clsx'

interface Props {
    answer: string
    correct: string
}

export default function OXAnswerCard({ answer, correct }: Props) {
    return (
        <div className="flex w-full flex-1 items-center justify-center gap-[16px]">
            {['O', 'X'].map((opt) => {
                const isCorrect = correct === opt
                const isWrong = opt === answer && answer !== correct

                return (
                    <div
                        key={opt}
                        className={clsx(
                            'flex-1 rounded-lg border-2 text-center text-[64px] font-semi-bold md:text-[128px]',
                            opt === 'O' ? 'text-point-200' : 'text-danger-300',
                            {
                                'border-point-500': isCorrect,
                                'border-danger-300': isWrong,
                            },
                        )}
                    >
                        {opt}
                    </div>
                )
            })}
        </div>
    )
}
