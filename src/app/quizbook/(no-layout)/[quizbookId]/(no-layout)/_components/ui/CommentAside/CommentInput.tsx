'use client'

import SendSvg from '@/assets/svgs/send.svg'
import { LoopAnimation, ProfileImage } from '@/components'
import { usePostComment } from '@/hooks/mutations/comment'
import { useCurrentUser } from '@/hooks/queries/user'
import clsx from 'clsx'

import { useEffect, useRef, useState } from 'react'

interface Props {
    quizId: string
    commentId?: string
}

export default function CommentInput({ quizId, commentId }: Props) {
    const [value, setValue] = useState('')
    const divRef = useRef<HTMLDivElement>(null)

    const { mutate: postComment, isPending } = usePostComment(quizId)
    const { data: userData } = useCurrentUser()

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
        postComment({
            content: value,
            commentId,
        })

        setValue('')
    }

    return (
        <div className="flex items-end gap-[16px] overflow-y-hidden bg-white p-[16px] py-[8px] md:py-[16px]">
            <div className="-translate-y-1/4">
                <ProfileImage
                    size={32}
                    profileImg={userData?.profileImg || ''}
                />
            </div>

            <div className="relative flex-1">
                {value === '' && (
                    <div className="pointer-events-none absolute left-[24px] top-1/2 -translate-y-1/2 text-mobile-body-md text-gray-400 md:left-[32px] md:text-pc-body-md">
                        댓글 추가...
                    </div>
                )}
                <div
                    className="scroll no-scrollbar input-solid input-mobile max-h-[100px] min-h-0 flex-1 cursor-text overflow-hidden overflow-y-auto whitespace-pre-wrap break-words md:input-pc"
                    style={{ overflowWrap: 'anywhere' }}
                    ref={divRef}
                    contentEditable
                    suppressHydrationWarning
                    onInput={handleInput}
                />
            </div>
            <button onClick={handleSubmit} className="-translate-y-1/4">
                {isPending ? (
                    <div className="size-8 animate-spin">
                        <LoopAnimation />
                    </div>
                ) : (
                    <SendSvg
                        className={clsx(
                            'size-8 text-gray-400',
                            'hover:text-point-500 active:text-point-500',
                        )}
                    />
                )}
            </button>
        </div>
    )
}
