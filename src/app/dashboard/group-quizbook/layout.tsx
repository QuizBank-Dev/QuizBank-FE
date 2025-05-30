import MobileHeader from '@/components/MobileHeader'
import DashboardSidebar from '../_components/layout/DashboardSidebar'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <MobileHeader backBtn={true} title="그룹 선정 문제집" />
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <div className="flex w-full max-w-[1024px] flex-1 gap-[16px] p-[16px] md:mx-auto md:gap-[32px]">
                    <div className="hidden md:block">
                        <DashboardSidebar />
                    </div>
                    <main className="flex min-w-0 flex-1 flex-col">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
