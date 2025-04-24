import MobileHeader from '@/components/MobileHeader'
import GroupSearch from './_components/GroupSearch'

export default function GroupPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 검색" backBtn>
                <MobileHeader.UserMenu />
            </MobileHeader>

            {/* 컨탠츠 */}
            <main className="custom-scrollbar flex w-full flex-1 flex-col items-center overflow-auto">
                <div className="flex w-full max-w-[1056px] flex-col gap-4 px-4 py-4 md:py-8">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 검색
                    </h2>
                    <GroupSearch />
                </div>
            </main>
        </>
    )
}
