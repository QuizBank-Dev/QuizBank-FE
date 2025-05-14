import DesktopHeader from '@/components/DesktopHeader'
import SocketProvider from './[groupId]/_components/SocketProvider'

export default function GroupDesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SocketProvider>
            <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
                {/* 데스크탑 전용 헤더 */}
                <DesktopHeader />

                {/* 컨탠츠 */}
                {children}
            </div>
        </SocketProvider>
    )
}
