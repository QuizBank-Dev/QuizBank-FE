import DesktopHeader from '@/components/DesktopHeader'
import MobileBottomNav from '@/components/MobileBottomNav'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex h-full flex-col">
            <DesktopHeader />
            <div className="flex flex-1 flex-col overflow-hidden">
                {children}
            </div>
            <MobileBottomNav />
        </div>
    )
}
