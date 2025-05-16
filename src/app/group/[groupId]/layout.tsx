import Sidebar from '@/components/Sidebar'
import InfoIcon from '@/assets/svgs/info.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import GroupChatIcon from '@/assets/svgs/group-chat.svg'
import MemberIcon from '@/assets/svgs/member.svg'
import CheckGroup from './_components/CheckGroup'

export default async function GroupSidebarLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <div className="flex h-full w-full max-w-[1056px] flex-1 flex-col gap-4 overflow-auto md:flex-row md:gap-0 md:py-4 md:pt-8">
            <div className="hidden h-full w-[230px] px-4 md:block">
                <Sidebar gap={4}>
                    <Sidebar.Group>
                        <Sidebar.Item
                            icon={<InfoIcon className="size-5" />}
                            text="그룹 정보"
                            href={`/group/${groupId}/info`}
                        />
                    </Sidebar.Group>
                    <Sidebar.Group>
                        <Sidebar.Item
                            icon={<NoteIcon className="size-5" />}
                            text="선정 문제집"
                            href={`/group/${groupId}/quizbook`}
                        />
                        <Sidebar.Item
                            icon={<GroupChatIcon className="size-5" />}
                            text="그룹 채팅"
                            href={`/group/${groupId}/chat`}
                        />
                        <Sidebar.Item
                            icon={<MemberIcon className="size-5" />}
                            text="그룹원 관리"
                            href={`/group/${groupId}/member`}
                        />
                    </Sidebar.Group>
                </Sidebar>
            </div>
            {children}
            <CheckGroup />
        </div>
    )
}
