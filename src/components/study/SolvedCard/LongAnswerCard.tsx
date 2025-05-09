interface Props {
    answer: string
}

export default function LongAnswerCard({ answer }: Props) {
    return (
        <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden">
            <div
                className="custom-scrollbar overflow-y-auto whitespace-pre-wrap break-words text-center text-mobile-body-md outline-none md:text-pc-body-md"
                style={{ overflowWrap: 'anywhere' }}
            >
                {answer}
            </div>
        </div>
    )
}
