import Sidebar from '@/components/Sidebar'
import InfoIcon from '@/assets/svgs/info.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import GroupChatIcon from '@/assets/svgs/group-chat.svg'
import MemberIcon from '@/assets/svgs/member.svg'

export default async function GroupSidebarLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <div className="flex w-full max-w-[1056px] flex-col gap-4 md:flex-row md:gap-8 md:px-4 md:py-8">
            <div className="hidden w-[230px] md:block">
                <Sidebar gap={4}>
                    <Sidebar.Group>
                        <Sidebar.Item
                            icon={<InfoIcon className="size-5" />}
                            text="그룹 정보"
                            href={`/group/${groupId}`}
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
                            text="멤버 관리"
                            href={`/group/${groupId}/member`}
                        />
                    </Sidebar.Group>
                </Sidebar>
            </div>
            {children}
        </div>
    )
}
