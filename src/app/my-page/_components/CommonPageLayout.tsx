import MobileHeader from '@/components/MobileHeader'
import MyPageSidebar from './MyPageSidebar'

interface Props {
    title: string
    children?: React.ReactNode
}

export default function CommonPageLayout({ title, children }: Props) {
    return (
        <>
            <MobileHeader title={title} backBtn />
            <div className="flex w-full max-w-[1056px] flex-col-reverse gap-4 p-4 md:flex-row md:pt-8">
                <MyPageSidebar />
                <main className="flex flex-1 flex-col gap-4">
                    <h2 className="hidden text-mobile-title-sm font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                        {title}
                    </h2>
                    {children}
                </main>
            </div>
        </>
    )
}
