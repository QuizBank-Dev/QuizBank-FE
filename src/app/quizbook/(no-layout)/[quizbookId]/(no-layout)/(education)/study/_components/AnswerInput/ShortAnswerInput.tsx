interface Props {
    value?: string
    onChange: (answer: string) => void
}

export default function ShortAnswerInput({ value, onChange }: Props) {
    return (
        <div className="flex flex-1 flex-col justify-center">
            <input
                onChange={(e) => onChange(e.target.value)}
                value={value || ''}
                placeholder="정답을 입력하세요"
                className="text-center text-mobile-body-md outline-none md:text-pc-body-md"
            />
        </div>
    )
}
