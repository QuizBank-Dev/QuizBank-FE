import { redirect } from 'next/navigation'
import CommonPageLayout from '../_components/CommonPageLayout'
import TabList from './_components/TabList'
import FollowerList from './_components/FollowerList'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ tab?: string }>
}) {
    const { tab } = await searchParams

    if (!!tab && tab !== 'follower' && tab !== 'following') {
        return redirect('/my-page/follower')
    }

    return (
        <CommonPageLayout title="구독자 관리">
            <TabList />
            <FollowerList />
        </CommonPageLayout>
    )
}
