import MobileBottomNav from '@/components/MobileBottomNav'

export default function GroupMobileLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            {/* 컨탠츠 */}
            {children}

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav />
        </>
    )
}
