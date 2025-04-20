import MobileHeader from '@/components/MobileHeader'

export default function GroupInfoPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 정보" backBtn>
                <MobileHeader.UserMenu />
            </MobileHeader>

            {/* 컨탠츠 */}
            <main className="flex w-full flex-1 flex-col items-center overflow-auto">
                <div className="flex w-full flex-col gap-4 px-4 md:px-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 정보
                    </h2>
                    hi
                </div>
            </main>
        </>
    )
}
