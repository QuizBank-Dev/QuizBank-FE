import MobileHeader from '@/components/MobileHeader'
import Detail from './_components/Detail'

export default function GroupQuizbookDetailPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="선정 문제집 활동 상세" backBtn />

            {/* 컨탠츠 */}
            <main className="no-scrollbar flex w-full flex-1 flex-col items-center overflow-auto md:px-4">
                <Detail />
            </main>
        </>
    )
}
