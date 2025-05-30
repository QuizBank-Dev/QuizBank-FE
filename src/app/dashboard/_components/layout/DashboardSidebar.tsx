import InfoSvg from '@/assets/svgs/info.svg'
import HeartFillSvg from '@/assets/svgs/heart-fill.svg'
import BookmarkSvg from '@/assets/svgs/bookmark.svg'
import GroupChatSvg from '@/assets/svgs/group-chat.svg'
import RecentSvg from '@/assets/svgs/recent.svg'

import Sidebar from '@/components/Sidebar'

export default function DashboardSidebar() {
    return (
        <div className="w-full shrink-0 md:order-first md:w-[230px]">
            <Sidebar gap={4}>
                <Sidebar.Group className="hidden md:flex">
                    <Sidebar.Item
                        icon={<InfoSvg className="size-5" />}
                        text="학습 현황"
                        href="/dashboard/info"
                    />
                </Sidebar.Group>
                <Sidebar.Group>
                    <Sidebar.Item
                        icon={<HeartFillSvg className="size-5" />}
                        text="찜 한 문제집"
                        href="/dashboard/quizbook-like"
                    />
                    <Sidebar.Item
                        icon={<BookmarkSvg className="size-5" />}
                        text="다시 볼 문제"
                        href="/dashboard/quiz-like"
                    />
                    <Sidebar.Item
                        icon={<GroupChatSvg className="size-5" />}
                        text="그룹 선정 문제집"
                        href="/dashboard/group-quizbook"
                    />
                    <Sidebar.Item
                        icon={<RecentSvg className="size-5" />}
                        text="학습 결과"
                        href="/dashboard/study-result"
                    />
                </Sidebar.Group>
            </Sidebar>
        </div>
    )
}
