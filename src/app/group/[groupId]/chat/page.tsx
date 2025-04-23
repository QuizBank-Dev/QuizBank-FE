import MobileHeader from '@/components/MobileHeader'
import GroupChat from './_components/GroupChat'

export default async function GroupChatPage({
    params,
}: Readonly<{
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 채팅" backBtn />

            {/* 컨탠츠 */}
            <main className="flex h-full w-full flex-1 flex-col items-center overflow-visible">
                <div className="flex h-full w-full flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 채팅
                    </h2>
                    <GroupChat groupId={groupId} />
                </div>
            </main>
        </>
    )
}
