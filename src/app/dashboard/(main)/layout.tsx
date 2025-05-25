import MobileHeader from '@/components/MobileHeader'
import { DashboardSidebar } from '../_components/layout'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <MobileHeader backBtn={true} title="학습 현황">
                <MobileHeader.UserMenu />
            </MobileHeader>
            <div className="flex w-full max-w-[1024px] flex-1 flex-col overflow-y-auto md:mx-auto md:flex-row">
                <main className="flex min-w-0 flex-col p-[16px] pb-[8px] md:order-2 md:flex-1 md:pb-[16px]">
                    {children}
                </main>
                <div className="p-[16px] pt-[8px] md:pt-[16px]">
                    <DashboardSidebar />
                </div>
            </div>
        </>
    )
}
