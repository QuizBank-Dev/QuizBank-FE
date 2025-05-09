interface Props {
    answer: string
}

export default function ShortAnswerCard({ answer }: Props) {
    return (
        <div className="flex flex-1 flex-col justify-center">
            <div
                style={{ overflowWrap: 'anywhere' }}
                className="custom-scrollbar whitespace-pre-wrap break-words text-center text-mobile-body-md md:text-pc-body-md"
            >
                {answer}
            </div>
        </div>
    )
}
