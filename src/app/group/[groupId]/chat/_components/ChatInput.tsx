'use client'

import SendIcon from '@/assets/svgs/send.svg'
import { useGroupQuery } from '@/hooks/queries/group'
import { useSocketStore } from '@/store/group'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

export default function ChatInput() {
    const { groupId } = useParams()
    const { data } = useGroupQuery(groupId as string)
    const socket = useSocketStore((state) => state.socket)
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    // 메시지 전송 함수
    const sendMessage = () => {
        if (!socket || !input.trim() || !data?.chatRoom) return
        socket.emit('send_chat', {
            chatRoomId: data.chatRoom,
            content: input.trim(),
        })
        setInput('')
        // input 포커스 유지
        inputRef.current?.focus()
    }

    // 엔터 입력 처리
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim().length > 0) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="input-solid input-mobile w-full pr-10 font-regular text-gray-900 md:input-pc"
            />
            <SendIcon
                onClick={() => {
                    if (input.trim().length > 0) sendMessage()
                }}
                className="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-gray-400 md:size-6"
            />
        </div>
    )
}
