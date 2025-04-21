import MobileHeader from '@/components/MobileHeader'

export default function GroupQuizbookPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 선정 문제집" backBtn />

            {/* 컨탠츠 */}
            <main className="flex w-full flex-1 flex-col items-center overflow-visible">
                <div className="flex w-full flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 선정 문제집
                    </h2>
                    {/* 클라이언트 컴포넌트 */}
                </div>
            </main>
        </>
    )
}
