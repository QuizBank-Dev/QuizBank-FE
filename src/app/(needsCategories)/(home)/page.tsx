import MainBanner from './_components/MainBanner'

export default function Home() {
    return (
        <main className="flex w-full max-w-[1024px] flex-col gap-4 p-4">
            <MainBanner />
            <div>Home 페이지</div>
        </main>
    )
}
