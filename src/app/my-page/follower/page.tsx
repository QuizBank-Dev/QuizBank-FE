import { Follower } from '@/types/user'
import CommonPageLayout from '../_components/CommonPageLayout'
import TabList from './_components/TabList'
import FollowerList from './_components/FollowerList'

// 임시데이터
const followerList: Record<string, Follower[]> = {
    follower: [
        {
            _id: '65e8a5d6fc13ae5e7f000001',
            nickname: 'example1',
            profileImg: '',
        },
        {
            _id: '65e8a5d6fc13ae5e7f000002',
            nickname: 'example2',
            profileImg: '',
        },
        {
            _id: '65e8a5d6fc13ae5e7f000003',
            nickname: 'example3',
            profileImg: '',
        },
    ],
    following: [
        {
            _id: '65e8a5d6fc13ae5e7f000001',
            nickname: 'example1',
            profileImg: '',
        },
        {
            _id: '65e8a5d6fc13ae5e7f000002',
            nickname: 'example2',
            profileImg: '',
        },
        {
            _id: '65e8a5d6fc13ae5e7f000003',
            nickname: 'example3',
            profileImg: '',
        },
    ],
}

export default function Page() {
    return (
        <CommonPageLayout title="구독자 관리">
            <TabList />
            <FollowerList followerList={followerList} />
        </CommonPageLayout>
    )
}
