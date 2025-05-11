import DesktopHeader from '@/components/DesktopHeader'
import MobileHeader from '@/components/MobileHeader'

interface Props {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function Layout({ children, modal }: Props) {
    return (
        <div className="flex max-h-screen min-h-screen flex-col">
            {/* 모달 */}
            {modal}

            {/* 헤더 */}
            <DesktopHeader>
                <nav className="flex">
                    <DesktopHeader.MenuItem text="문제집" href="/quizbook" />
                    <DesktopHeader.MenuItem text="그룹" href="/group" />
                </nav>
                <DesktopHeader.UserMenu />
            </DesktopHeader>
            <MobileHeader title="문제집 생성" backBtn={true} />

            {/* 컨텐츠 */}
            <main className="flex flex-1 flex-col items-center overflow-auto p-[16px] md:overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
