import MobileHeader from '@/components/MobileHeader'
import GroupQuizbookSearch from './_components/GroupQuizbookSearch'

export default async function GroupQuizbookPage({
    params,
}: Readonly<{
    params: Promise<{ groupId: string }>
}>) {
    const { groupId } = await params

    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 선정 문제집" backBtn />

            {/* 컨탠츠 */}
            <main className="no-scrollbar flex w-full flex-1 flex-col items-center overflow-auto md:px-2">
                <div className="flex w-full flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 선정 문제집
                    </h2>
                    <GroupQuizbookSearch groupId={groupId} />
                </div>
            </main>
        </>
    )
}
