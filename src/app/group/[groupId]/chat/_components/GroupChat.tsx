'use client'

import { ProfileImage } from '@/components'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import { useChatQuery } from '@/hooks/queries/chat'
import { useGroupQuery } from '@/hooks/queries/group'
import { useCurrentUser } from '@/hooks/queries/user'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

export default function GroupChat({ groupId }: { groupId: string }) {
    const { data: groupData } = useGroupQuery(groupId)
    const chatRoomId = groupData?.chatRoom
    const { data: chatData } = useChatQuery(chatRoomId, 10)
    const { data: userData } = useCurrentUser()

    return (
        <section className="flex flex-1 flex-col gap-4 overflow-auto">
            <div className="no-scrollbar flex-1 overflow-y-auto rounded-lg border-2 border-point-500 bg-white p-4">
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
