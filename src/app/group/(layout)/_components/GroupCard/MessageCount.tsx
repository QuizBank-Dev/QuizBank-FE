import { useEffect, useState } from 'react'
import { useGroupCardContext } from './GroupCardContext'
import Comment from '@/assets/svgs/comment.svg'
import { useSocketStore } from '@/store/group'
import { ChatMessageType } from '@/types/chat'
import clsx from 'clsx'

export default function MessageCount() {
    const { chatRoom, unreadMessageCount = 0 } = useGroupCardContext()
    const [newMessageCount, setNewMessageCount] = useState(0)
    const socket = useSocketStore((state) => state.socket)

    useEffect(() => {
        if (!socket || !chatRoom) return

        // 소켓 room에 join
        socket.emit('enter_chat', [chatRoom])

        // receive_chat 이벤트 핸들러 등록
        const handleReceiveChat = (newMessage: ChatMessageType) => {
            if (newMessage.chatRoom === chatRoom)
                // 메세지 새로 올때마다 1씩 증가
                setNewMessageCount((prev) => prev + 1)
        }

        // receive_chat 이벤트 수신
        socket.on('receive_chat', handleReceiveChat)

        // cleanup
        return () => {
            socket.off('receive_chat', handleReceiveChat)
            // 채팅방 나가기
            socket.emit('leave_chat', [chatRoom])
        }
    }, [socket, chatRoom])

    if (!chatRoom) {
        return null
    }

    return (
        <div
            className={clsx(
                'inline-flex items-center gap-2 rounded-full bg-point-500 p-2 px-3 text-point-50 md:px-4',
                unreadMessageCount + newMessageCount === 0 && 'hidden',
            )}
        >
            <Comment className="size-4" />
            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                {unreadMessageCount + newMessageCount}
            </span>
        </div>
    )
}
