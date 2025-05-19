import { notFound } from 'next/navigation'
import { getServerToken } from '@/utils/getServerToken'
import { getOtherUser } from '@/lib/api/user'
import MobileHeader from '@/components/MobileHeader'
import OtherUserPreFetcher from './_provider/OtherUserPreFetcher'
import Profile from './_components/Profile'
import StudyLog from './_components/StudyLog'
import QuizbookList from './_components/QuizbookList'

export default async function Page({
    params,
}: {
    params: Promise<{ userId: string }>
}) {
    const userId = (await params).userId
    const token = await getServerToken()

    const user = await getOtherUser(userId, token).catch(() => {
        return null
    })

    // 해당 유저가 존재하지 않는 경우
    if (!user) {
        return notFound()
    }

    return (
        <OtherUserPreFetcher userId={userId} defaultData={user}>
            <MobileHeader title={user?.nickname || ''} backBtn />
            <main className="no-scrollbar relative flex w-full max-w-[1056px] flex-col items-start gap-4 overflow-auto p-4 md:flex-row md:pt-8">
                <Profile />
                <div className="flex w-full flex-1 flex-col gap-4">
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
                </div>
            </main>
        </OtherUserPreFetcher>
    )
}
