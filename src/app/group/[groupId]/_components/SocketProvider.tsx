'use client'

import { useSocketStore } from '@/store/group'
import { ReactNode, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'

interface Props {
    children: ReactNode
}

export default function SocketProvider({ children }: Props) {
    const { socket, setSocket } = useSocketStore()

    useEffect(() => {
        // 이미 소켓이 있으면 새로 만들지 않음
        if (!socket) {
            const s: Socket = io(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
                withCredentials: true,
            })
            setSocket(s)
        }

        return () => {
            // 언마운트 시 소켓 정리
            if (socket) {
                socket.disconnect()
                setSocket(null)
            }
        }
        // eslint-disable-next-line
    }, [])

    return <>{children}</>
}
