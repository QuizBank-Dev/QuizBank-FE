import DesktopHeader from '@/components/DesktopHeader'
import MobileBottomNav from '@/components/MobileBottomNav'
import MobileHeader from '@/components/MobileHeader'
import { QuizbookListPreFetcher } from './_providers/QuizbookListPreFetcher'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QuizbookListPreFetcher>
            <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
                {/* 데스크탑 전용 헤더 */}
                <DesktopHeader />

                {/* 모바일 전용 헤더 */}
                <MobileHeader title="문제집">
                    <MobileHeader.UserMenu />
                </MobileHeader>

                <main className="no-scrollbar flex w-full flex-1 flex-col items-center overflow-auto">
                    {children}
                </main>

                {/* 모바일 전용 바텀 Nav */}
                <MobileBottomNav />
            </div>
        </QuizbookListPreFetcher>
    )
}
