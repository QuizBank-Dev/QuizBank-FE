import QuizbookList from './_components/QuizbookList'
import SearchForm from './_components/SearchForm'
import { QuizbookListParams } from '@/types/api/quizbook'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<QuizbookListParams>
}) {
    const params = await searchParams

    return (
        <main className="flex w-full max-w-[1056px] flex-col gap-4 px-4 py-4 md:py-8">
            <SearchForm params={params} />
            <QuizbookList />
        </main>
    )
}
