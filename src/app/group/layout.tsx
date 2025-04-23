import DesktopHeader from '@/components/DesktopHeader'

export default function GroupDesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-screen flex-col items-center bg-point-50 text-gray-900">
            {/* 데스크탑 전용 헤더 */}
            <DesktopHeader />

            {/* 컨탠츠 */}
            {children}
        </div>
    )
}
