import MobileHeader from '@/components/MobileHeader'
import NoteIcon from '@/assets/svgs/note.svg'
import GroupChatIcon from '@/assets/svgs/group-chat.svg'
import MemberIcon from '@/assets/svgs/member.svg'
import Sidebar from '@/components/Sidebar'
import GroupInfo from './_components/GroupInfo'

export default async function GroupInfoPage({
    params,
}: Readonly<{
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 정보" backBtn />

            {/* 컨탠츠 */}
            <main className="no-scrollbar flex h-full w-full flex-1 flex-col items-center overflow-auto px-2 pb-4">
                <div className="flex w-full flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 정보
                    </h2>
                    <GroupInfo />
                    <div className="w-full md:hidden">
                        <Sidebar gap={4}>
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
                </div>
            </main>
        </>
    )
}
