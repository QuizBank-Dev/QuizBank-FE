import { redirect } from 'next/navigation'
import DesktopHeader from '@/components/DesktopHeader'
import { QueryKey } from '@/constants/common/queryKey'
import { getCurrentUser } from '@/lib/api/user'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { getServerToken } from '@/utils/getServerToken'

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ userId: string }>
}) {
    const queryClient = getQueryClient()
    const userId = (await params).userId
    const token = await getServerToken()

    const me = await queryClient.ensureQueryData({
        queryKey: QueryKey.user.DEFAULT,
        queryFn: () => getCurrentUser(token),
    })

    // 현재 로그인되어있는 유저인 경우
    if (me && me._id === userId) {
        return redirect('/my-page')
    }

    return (
        <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
            {/* 데스크탑 전용 헤더 */}
            <DesktopHeader />

            {children}
        </div>
    )
}
