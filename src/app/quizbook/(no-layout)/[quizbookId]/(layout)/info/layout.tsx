import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'
import MobileBottomNav from './_components/MobileBottomNav'

export default function Layout({
    children,
    modal,
}: {
    children: React.ReactNode
    modal: React.ReactNode
}) {
    return (
        <>
            <div className="flex h-screen flex-col items-center font-semi-bold text-gray-900">
                {/* 데스크탑 전용 헤더 */}
                <DesktopHeader />

                {/* 모바일 전용 헤더 */}
                <MobileHeader title="그룹 정보" backBtn>
                    <MobileHeader.UserMenu />
                </MobileHeader>

                {children}

                {/* 문제 상세 페이지 전용 바텀 Nav */}
                <MobileBottomNav />
            </div>

            {modal}
        </>
    )
}
