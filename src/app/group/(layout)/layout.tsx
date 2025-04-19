import DesktopHeader from '@/components/DesktopHeader'

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
        </div>
    )
}
