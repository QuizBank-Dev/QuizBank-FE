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
