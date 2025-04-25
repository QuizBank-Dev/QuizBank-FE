import MobileHeader from '@/components/MobileHeader'

export default function GroupQuizbookDetailPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="선정 문제집 활동 상세" backBtn />

            {/* 컨탠츠 */}
            <main className="custom-scrollbar flex w-full flex-1 flex-col items-center overflow-auto md:px-2">
                <div className="flex w-full flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0">
                    <div className="hidden gap-4 md:flex">
                        <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                            선정 문제집 활동 상세
                        </h2>
                    </div>
                </div>
            </main>
        </>
    )
}
