import MobileBottomNav from '@/components/MobileBottomNav'

export default function GroupMobileLayout({
    main,
    modal,
}: Readonly<{
    main: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <>
            {/* 컨탠츠 */}
            {main}

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav />

            {modal}
        </>
    )
}
