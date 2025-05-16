import MobileBottomNav from '@/components/MobileBottomNav'

export default function GroupMobileLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <>
            {/* 컨탠츠 */}
            {children}

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav />

            {modal}
        </>
    )
}
