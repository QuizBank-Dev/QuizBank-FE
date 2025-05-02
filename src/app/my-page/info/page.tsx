import CommonPageLayout from '../_components/CommonPageLayout'
import UserProfile from './_components/UserProfile'

export default function Page() {
    return (
        <CommonPageLayout title="내 정보">
            <UserProfile />
        </CommonPageLayout>
    )
}
