import MobileHeader from '@/components/MobileHeader'
import GroupMemberList from './_components/GroupMemberList'

export default async function GroupMemberPage({
    params,
}: Readonly<{
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹원 관리" backBtn />

            {/* 컨탠츠 */}
            <main className="flex w-full flex-1 flex-col items-center overflow-visible">
                <div className="flex w-full flex-col gap-4 px-4 pb-4 md:px-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹원 관리
                    </h2>
                    <GroupMemberList groupId={groupId} />
                </div>
            </main>
        </>
    )
}
