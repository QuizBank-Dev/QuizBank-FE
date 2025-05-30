'use client'

import TrashSvg from '@/assets/svgs/trash.svg'
import EditSvg from '@/assets/svgs/edit.svg'

import { useEffect, useRef } from 'react'

interface Props {
    onEdit: () => void
    onRemove: () => void
    onClose: () => void
    buttonRef: React.RefObject<HTMLButtonElement | null>
}

export default function CommentMenu({
    onEdit,
    onRemove,
    onClose,
    buttonRef,
}: Props) {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node

            if (
                divRef.current &&
                !divRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose, buttonRef])

    return (
        <div
            ref={divRef}
            className="absolute right-0 top-full z-10 flex flex-col rounded-lg bg-white shadow-point"
        >
            <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation()
                    onEdit()
                }}
                className="flex w-full items-center gap-[4px] p-[16px] pb-[8px] text-mobile-body-sm md:gap-[8px] md:text-pc-body-sm"
            >
                <EditSvg className="size-4" />
                <span className="whitespace-nowrap">수정</span>
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    onRemove()
                    e.stopPropagation()
                }}
                className="flex w-full items-center gap-[4px] p-[16px] pt-[8px] text-mobile-body-sm text-danger-400 md:gap-[8px] md:text-pc-body-sm"
            >
                <TrashSvg className="size-4" />
                <span className="whitespace-nowrap">삭제</span>
            </button>
        </div>
    )
}
