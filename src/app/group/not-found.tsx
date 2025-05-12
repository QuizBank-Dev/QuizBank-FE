import MobileHeader from '@/components/MobileHeader'

export default function NotFound() {
    return (
        <div className="flex h-full w-full max-w-[1056px] flex-1 flex-col gap-4 overflow-auto md:flex-row md:gap-0 md:py-4 md:pt-8">
            <MobileHeader title="Not Found" backBtn />
            <main className="no-scrollbar flex h-full w-full flex-1 flex-col items-center justify-between gap-4 overflow-auto pb-4 md:gap-8 md:px-4">
                Not Found
            </main>
        </div>
    )
}
