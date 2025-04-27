import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col items-center font-semi-bold text-gray-900">
            {/* 데스크탑 전용 헤더 */}
            <DesktopHeader />

            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 정보" backBtn>
                <MobileHeader.UserMenu />
            </MobileHeader>

            {/* 컨탠츠 */}
            {children}
        </div>
    )
}
