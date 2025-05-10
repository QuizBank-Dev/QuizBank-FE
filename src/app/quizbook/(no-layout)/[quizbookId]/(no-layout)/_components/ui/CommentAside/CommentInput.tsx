'use client'

import SendSvg from '@/assets/svgs/send.svg'
import clsx from 'clsx'

import { useEffect, useRef, useState } from 'react'

interface Props {
    quizId: string
    commentId?: string
}

export default function CommentInput({ quizId, commentId }: Props) {
    const [value, setValue] = useState('')
    const divRef = useRef<HTMLDivElement>(null)

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const text = e.currentTarget.textContent || ''
        setValue(text)
    }

    useEffect(() => {
        if (divRef.current && divRef.current.textContent !== value)
            divRef.current.textContent = value
    }, [value])

    const handleSubmit = async () => {
        if (!value.trim()) return

        // TODO: 댓글 POST 로직
        const data = {
            quizId,
            commentId,
            content: value,
        }

        console.log(data)

        setValue('')

        // TODO: 리패칭 로직
    }

    return (
        <div className="flex items-end gap-[16px] overflow-y-hidden bg-white p-[16px] py-[8px] md:py-[16px]">
            <div className="size-8 -translate-y-1/4 rounded-full bg-gray-300 pb-[20px] md:pb-[24px]" />
            <div className="relative flex-1">
                {value === '' && (
                    <div className="pointer-events-none absolute left-[24px] top-1/2 -translate-y-1/2 text-mobile-body-md text-gray-400 md:left-[32px] md:text-pc-body-md">
                        댓글 추가...
                    </div>
                )}
                <div
                    className="scroll scrollbar-none input-solid input-mobile max-h-[100px] min-h-0 flex-1 cursor-text overflow-hidden overflow-y-auto whitespace-pre-wrap break-words md:input-pc"
                    style={{ overflowWrap: 'anywhere' }}
                    ref={divRef}
                    contentEditable
                    suppressHydrationWarning
                    onInput={handleInput}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="translate-y-1/4 pb-[20px] md:pb-[24px]"
            >
                <SendSvg
                    className={clsx(
                        'size-8 text-gray-400',
                        'hover:text-point-500 active:text-point-500',
                    )}
                />
            </button>
        </div>
    )
}
