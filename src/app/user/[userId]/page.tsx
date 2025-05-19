import { notFound } from 'next/navigation'
import MobileHeader from '@/components/MobileHeader'
import { getOtherUser } from '@/lib/api/user'
import { getServerToken } from '@/utils/getServerToken'
import Profile from './_components/Profile'
import StudyLog from './_components/StudyLog'
import QuizbookList from './_components/QuizbookList'
import OtherUserPreFetcher from './_provider/OtherUserPreFetcher'

export default async function Page({
    params,
}: {
    params: Promise<{ userId: string }>
}) {
    const userId = (await params).userId
    const user = await getOtherUser(userId, await getServerToken()).catch(
        () => {
            return null
        },
    )

    if (!user) {
        return notFound()
    }

    return (
        <OtherUserPreFetcher userId={userId} defaultData={user}>
            <MobileHeader title={user?.nickname || ''} backBtn />
            <div className="flex w-full max-w-[1056px] flex-col items-start gap-4 p-4 md:flex-row md:pt-8">
                <Profile />
                <main className="flex w-full flex-1 flex-col gap-4">
                    <h2 className="hidden text-mobile-title-sm font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                        <span className="text-point-500">
                            {user?.nickname || ''}
                        </span>
                        님의 학습 정보
                    </h2>
                    <div className="flex flex-col gap-8">
                        <StudyLog />
                        <QuizbookList />
                    </div>
                </main>
            </div>
        </OtherUserPreFetcher>
    )
}
