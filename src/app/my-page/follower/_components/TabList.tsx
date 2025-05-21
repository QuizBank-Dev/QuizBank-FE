'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import CustomTabs from '@/components/CustomTabs'

export default function TabList() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedTab = searchParams.get('tab') || 'following'

    const handleChangeActiveTap = (tab: string) => {
        router.replace(`/my-page/follower?tab=${tab}`)
    }

    return (
        <CustomTabs
            defaultValue={selectedTab}
            onValueChange={handleChangeActiveTap}
            tabList={[
                { value: 'following', text: '내가 구독중인 사용자' },
                { value: 'follower', text: '나를 구독중인 사용자' },
            ]}
        />
    )
}
