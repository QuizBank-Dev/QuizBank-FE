import MainBanner from './_components/MainBanner'
import StudyDashboard from './_components/StudyDashboard'
import RecommendedQuizbookList from './_components/RecommendedQuizbookList'

export default function Home() {
    return (
        <main className="flex w-full max-w-[1056px] flex-col gap-4 p-4 pb-8">
            <MainBanner />
            <StudyDashboard />
            <RecommendedQuizbookList />
        </main>
    )
}
