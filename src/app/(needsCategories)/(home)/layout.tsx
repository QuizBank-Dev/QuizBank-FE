import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'
import MobileBottomNav from '@/components/MobileBottomNav'
import DesktopFooter from '@/components/DesktopFooter'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
            {/* 데스크탑 전용 헤더 */}
            <DesktopHeader />

            {/* 모바일 전용 헤더 */}
            <MobileHeader title="Quizbank">
                <MobileHeader.UserMenu />
            </MobileHeader>

            {/* 컨탠츠 */}
            <div className="no-scrollbar flex h-full w-full flex-1 flex-col items-center justify-between overflow-auto">
                {children}

                {/* 데스크탑 푸터 */}
                <DesktopFooter />
            </div>

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav />
        </div>
    )
}
