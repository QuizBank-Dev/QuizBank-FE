import MainBanner from './_components/MainBanner'
import StudyDashboard from './_components/StudyDashboard'

export default function Home() {
    return (
        <main className="flex w-full max-w-[1024px] flex-col gap-4 p-4">
            <MainBanner />
            <StudyDashboard />
        </main>
    )
}
