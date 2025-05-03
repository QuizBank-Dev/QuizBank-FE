import CommonPageLayout from '../_components/CommonPageLayout'
import MyPageSidebar from '../_components/MyPageSidebar'
import UserProfile from './_components/UserProfile'
import MyInfoMenu from './_components/MyInfoMenu'
import Link from 'next/link'

export default function Page() {
    return (
        <CommonPageLayout title="내 정보">
            <UserProfile />
            <MyInfoMenu />
            <MyPageSidebar className="!block md:!hidden" />
            <div className="text-center">
                <Link
                    className="text-mobile-body-sm text-gray-500 underline md:text-pc-body-sm"
                    href="#"
                >
                    회원탈퇴
                </Link>
            </div>
        </CommonPageLayout>
    )
}
