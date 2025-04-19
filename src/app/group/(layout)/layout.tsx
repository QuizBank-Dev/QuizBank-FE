import DesktopHeader from '@/components/DesktopHeader'
import MobileBottomNav from '@/components/MobileBottomNav'
import BottomHome from '@/assets/svgs/bottom-home.svg'
import BottomQuizbook from '@/assets/svgs/bottom-quizbook.svg'
import BottomGroup from '@/assets/svgs/bottom-group.svg'
import BottomMyStatus from '@/assets/svgs/bottom-my-status.svg'

export default function GroupLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-screen flex-col items-center bg-point-50 text-gray-900">
            {/* 데스크탑 전용 헤더 */}
            <DesktopHeader>
                <nav className="flex">
                    <DesktopHeader.MenuItem text="문제집" href="/quizbook" />
                    <DesktopHeader.MenuItem text="그룹" href="/group" />
                </nav>
                <DesktopHeader.UserMenu />
            </DesktopHeader>

            {children}

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav>
                <MobileBottomNav.MenuItem text="홈" href="/">
                    <BottomHome />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.MenuItem text="문제집" href="/quizbook">
                    <BottomQuizbook />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.MenuItem text="그룹" href="/group">
                    <BottomGroup />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.UserMenuItem
                    text="학습현황"
                    href="/study-status"
                >
                    <BottomMyStatus />
                </MobileBottomNav.UserMenuItem>
            </MobileBottomNav>
        </div>
    )
}
