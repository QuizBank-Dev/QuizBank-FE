'use client'

import SendIcon from '@/assets/svgs/send.svg'
import { useGroupQuery } from '@/hooks/queries/group'
import { useCurrentUser } from '@/hooks/queries/user'
import { useSocketStore } from '@/store/group'
import { ChatCache } from '@/types/chat'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

export default function ChatInput() {
    const { groupId } = useParams()
    const { data } = useGroupQuery(groupId as string)
    const socket = useSocketStore((state) => state.socket)
    const [input, setInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const queryClient = useQueryClient()
    const { data: userData } = useCurrentUser()

    // 메시지 전송 함수
    const sendMessage = () => {
        if (!socket || !input.trim() || !data?.chatRoom || !userData) return
        socket.emit('send_chat', {
            chatRoomId: data.chatRoom,
            content: input.trim(),
        })

        // 채팅 내역 캐시 데이터 조작
        queryClient.setQueryData(
            ['chat', data.chatRoom],
            (oldData: ChatCache) => {
                if (!oldData) return oldData

                const now = new Date().toString()
                const newMessage = {
                    _id: now,
                    content: input.trim(),
                    sender: userData._id,
                    createdAt: now,
                }

                // 새로운 메세지들이 저장될 배열의 마지막 인덱스 공간
                const needRoomForNew = !oldData.pageParams.includes('new')

                const newPages = needRoomForNew
                    ? [
                          ...oldData.pages,
                          {
                              chats: [newMessage],
                              nextCursor: 'new',
                          },
                      ]
                    : oldData.pages.map((page, idx) =>
                          idx === oldData.pages.length - 1
                              ? {
                                    ...page,
                                    chats: [...page.chats, newMessage],
                                }
                              : page,
                      )

                return {
                    ...oldData,
                    pages: newPages,
                    pageParams: needRoomForNew
                        ? [...oldData.pageParams, 'new']
                        : oldData.pageParams,
                }
            },
        )

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
