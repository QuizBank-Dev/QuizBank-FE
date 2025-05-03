import CommonPageLayout from '../_components/CommonPageLayout'
import MyPageSidebar from '../_components/MyPageSidebar'
import UserProfile from './_components/UserProfile'
import MyInfoMenu from './_components/MyInfoMenu'

export default function Page() {
    return (
        <CommonPageLayout title="내 정보">
            <UserProfile />
            <MyInfoMenu />
            <MyPageSidebar className="!block md:!hidden" />
        </CommonPageLayout>
    )
}
