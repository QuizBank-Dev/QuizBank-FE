'use client'

import { ProfileImage } from '@/components'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { useChatQuery } from '@/hooks/queries/chat'
import { useGroupQuery } from '@/hooks/queries/group'
import { useCurrentUser } from '@/hooks/queries/user'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
import { useCallback, useEffect, useRef } from 'react'
import { patchReadStatus } from '@/lib/api/chat'
import { toast } from 'sonner'
import { useSocketStore } from '@/store/group'
import { useQueryClient } from '@tanstack/react-query'
import { ChatCache, ChatMessageType } from '@/types/chat'

export default function GroupChat({ groupId }: { groupId: string }) {
    // 데이터 패칭
    const { data: groupData } = useGroupQuery(groupId)
    const chatRoomId = groupData?.chatRoom
    const {
        data: chatData,
        isFetchingPreviousPage,
        fetchPreviousPage,
        hasPreviousPage,
    } = useChatQuery(chatRoomId, 10)
    const { data: userData } = useCurrentUser()

    // 무한 스크롤 및 스크롤 위치 유지를 위한 ref 모음
    const topRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const prevScrollHeightRef = useRef(0)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const shouldAutoScrollRef = useRef(true)

    const hasPatchedReadStatus = useRef(false)

    // 다른 사람들의 메세지 수신 및 처리를 위한 변수
    const socket = useSocketStore((state) => state.socket)
    const queryClient = useQueryClient()

    // 패칭 전 scrollHeight 저장 함수
    const handleFetchPreviousPage = useCallback(async () => {
        const container = scrollContainerRef.current
        if (container) {
            prevScrollHeightRef.current = container.scrollHeight
        }
        // fetch 중에는 observer 연결 해제
        observerRef.current?.disconnect()
        await fetchPreviousPage()
    }, [fetchPreviousPage])

    // Intersection Observer 등록
    useEffect(() => {
        if (!topRef.current || !scrollContainerRef.current) return

        // 패칭 후 scrollTop 보정
        if (!isFetchingPreviousPage && prevScrollHeightRef.current) {
            const container = scrollContainerRef.current
            if (container) {
                const scrollDiff =
                    container.scrollHeight - prevScrollHeightRef.current
                container.scrollTop += scrollDiff
            }
            prevScrollHeightRef.current = 0
        }

        // 기존 observer 제거
        observerRef.current?.disconnect()

        // 새 observer 등록
        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    hasPreviousPage &&
                    !isFetchingPreviousPage
                ) {
                    handleFetchPreviousPage()
                }
            },
            {
                root: scrollContainerRef.current,
                threshold: 1,
            },
        )
        observer.observe(topRef.current)
        observerRef.current = observer

        // 메세지 읽음 요청 최소화
        if (groupData && !hasPatchedReadStatus.current) {
            patchReadStatus(groupData.chatRoom).catch((error) => {
                toast(error.response.data.message)
            })
            hasPatchedReadStatus.current = true
        }

        return () => observer.disconnect()
    }, [
        hasPreviousPage,
        isFetchingPreviousPage,
        handleFetchPreviousPage,
        chatData,
        groupData,
    ])

    // 다른 사람들의 메세지 수신 및 처리
    useEffect(() => {
        if (!socket || !chatRoomId) return

        // 채팅방에 join
        socket.emit('enter_chat', [chatRoomId])

        // receive_chat 이벤트 핸들러 등록
        const handleReceiveChat = (newMessage: ChatMessageType) => {
            // 수신 받은 메세지 읽음 요청
            patchReadStatus(groupData.chatRoom).catch((error) => {
                toast(error.response.data.message)
            })

            // 채팅 내역 캐시 데이터 조작
            queryClient.setQueryData(
                ['chat', chatRoomId],
                (oldData: ChatCache) => {
                    if (!oldData) return oldData

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
        }

        // receive_chat 이벤트 수신
        socket.on('receive_chat', handleReceiveChat)

        // cleanup
        return () => {
            socket.off('receive_chat', handleReceiveChat)
        }
    }, [socket, chatRoomId, queryClient, groupData])

    // 스크롤 위치 추적
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const handleScroll = () => {
            const isBottom =
                container.scrollTop + container.clientHeight >=
                container.scrollHeight - 20 // 약간의 여유를 둠
            shouldAutoScrollRef.current = isBottom
        }

        container.addEventListener('scroll', handleScroll)

        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // chatData 변경 시 자동 스크롤
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container || !chatData) return

        if (shouldAutoScrollRef.current) {
            container.scrollTop = container.scrollHeight
        }
    }, [chatData])

    return (
        <section className="flex flex-1 flex-col gap-4 overflow-auto">
            <div
                ref={scrollContainerRef}
                className="custom-scrollbar relative flex-1 overflow-y-auto rounded-lg border-2 border-point-500 bg-white p-4"
            >
                {/* 최상단 감지용 div */}
                <div ref={topRef} style={{ height: 1 }} />
                {chatData &&
                    userData &&
                    chatData.pages
                        .flatMap((page) => page.chats)
                        .map((data) => {
                            const user = groupData!.memberList.find(
                                (member) => member._id === data.sender,
                            )
                            return (
                                <ChatMessage
                                    key={data._id}
                                    chatData={data}
                                    userData={
                                        user ?? {
                                            _id: '',
                                            nickname: 'Unknown',
                                            profileImg: '',
                                            email: '',
                                        }
                                    }
                                    my={data.sender === userData._id}
                                />
                            )
                        })}
            </div>
            <form className="flex shrink-0 items-center gap-4 md:px-4">
                {userData ? (
                    <Link
                        className="h-8 w-8 cursor-pointer"
                        href={`/my-page/info`}
                    >
                        <ProfileImage
                            size={32}
                            profileImg={userData.profileImg}
                        />
                    </Link>
                ) : (
                    <Skeleton className="h-8 w-8 rounded-full" />
                )}
                <ChatInput />
            </form>
        </section>
    )
}
