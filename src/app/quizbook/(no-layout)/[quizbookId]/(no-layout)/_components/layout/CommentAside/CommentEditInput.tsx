'use client'

import SendSvg from '@/assets/svgs/send.svg'

import { LoopAnimation, ProfileImage } from '@/components'
import { usePatchComment } from '@/hooks/mutations/comment'
import { useCurrentUser } from '@/hooks/queries/user'
import { ErrorResponse } from '@/types/base'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { useCommentAside } from './CommentAsideContext'

export default function CommentEditInput() {
    const { editTarget, setEditTarget, selectedComment, setSelectedComment } =
        useCommentAside()

    const [value, setValue] = useState('')
    const divRef = useRef<HTMLDivElement>(null)

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const text = e.currentTarget.innerText || ''
        setValue(text)
    }
    const handleSubmit = async () => {
        if (!value.trim() || isPending) return

        mutate(
            {
                content: value,
            },
            {
                onSuccess: (data) => {
                    setValue('')
                    setEditTarget(null)

                    if (selectedComment) {
                        setSelectedComment({
                            ...selectedComment,
                            content: data.content,
                        })
                    }
                },
                onError: (e) => {
                    const err = e as AxiosError<ErrorResponse>
                    const msg =
                        err.response?.data.message ||
                        '댓글 수정 중 에러가 발생했습니다.'

                    toast.error(msg)
                },
            },
        )
    }
    const handleClose = () => {
        setEditTarget(null)
    }

    useEffect(() => {
        if (divRef.current && divRef.current.innerText !== value)
            divRef.current.innerText = value
    }, [value])

    useEffect(() => {
        setValue(editTarget?.content || '')
        if (divRef.current) {
            divRef.current.innerText = editTarget?.content || ''
        }
    }, [editTarget])

    const { data: userData } = useCurrentUser()
    const { mutate, isPending } = usePatchComment(
        editTarget!._id,
        selectedComment?._id,
    )

    return (
        <div
            onClick={handleClose}
            className="absolute inset-0 z-50 flex cursor-pointer flex-col justify-end bg-gray-900/30 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-end gap-[16px] overflow-y-hidden bg-white p-[16px] md:py-[24px]"
            >
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
                <button
                    disabled={isPending}
                    onClick={(e) => {
                        e.stopPropagation()
                        handleSubmit()
                    }}
                    className="-translate-y-1/4"
                >
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
        </div>
    )
}
