import MobileHeader from '@/components/MobileHeader'

interface Props {
    title: string
    children?: React.ReactNode
}

export default function CommonPageLayout({ title, children }: Props) {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title={title} backBtn />

            {/* 컨탠츠 */}
            <main className="no-scrollbar flex h-full w-full flex-1 items-center justify-center overflow-auto p-4">
                <div className="flex w-full max-w-[450px] flex-col items-center gap-4 rounded-lg p-4 md:gap-8 md:bg-white md:p-8 md:shadow-point">
                    <h2 className="text-mobile-title-sm font-extra-bold text-point-900 md:text-pc-title-sm">
                        {title}
                    </h2>
                    {children}
                </div>
            </main>
        </>
    )
}
