import { useEffect, useRef } from 'react'

interface Props {
    value?: string
    onChange: (answer: string) => void
}

export default function LongAnswerInput({ value, onChange }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current && ref.current.textContent !== value) {
            ref.current.textContent = value || ''
        }
    }, [value])

    const handleInput = () => {
        if (ref.current) {
            onChange(ref.current.textContent || '')
        }
    }

    return (
        <div className="relative flex w-full flex-1 flex-col justify-center overflow-hidden">
            <div
                ref={ref}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                className="custom-scrollbar overflow-y-auto whitespace-pre-wrap break-words text-center text-mobile-body-md outline-none md:text-pc-body-md"
                style={{ overflowWrap: 'anywhere' }}
            />
            {!value && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-mobile-body-md text-gray-400 md:text-pc-body-md">
                    답안을 입력하세요
                </div>
            )}
        </div>
    )
}
