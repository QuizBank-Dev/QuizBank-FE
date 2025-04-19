import MobileHeader from '@/components/MobileHeader'
import GroupSearch from './_components/GroupSearch'
import MobileBottomNav from '@/components/MobileBottomNav'
import BottomHome from '@/assets/svgs/bottom-home.svg'
import BottomQuizbook from '@/assets/svgs/bottom-quizbook.svg'
import BottomGroup from '@/assets/svgs/bottom-group.svg'
import BottomMyStatus from '@/assets/svgs/bottom-my-status.svg'

export default function GroupPage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 검색" backBtn>
                <MobileHeader.UserMenu />
            </MobileHeader>

            {/* 컨탠츠 */}
            <main className="flex w-full flex-1 flex-col items-center overflow-auto">
                <div className="flex w-full max-w-[1056px] flex-col gap-4 px-4 py-4 md:py-8">
                    <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                        그룹 검색
                    </h2>
                    <GroupSearch />
                </div>
            </main>

            {/* 모바일 전용 바텀 Nav */}
            <MobileBottomNav>
                <MobileBottomNav.MenuItem text="홈" href="/">
                    <BottomHome />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.MenuItem text="문제집" href="/quizbook">
                    <BottomQuizbook />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.MenuItem text="그룹" href="/group">
                    <BottomGroup />
                </MobileBottomNav.MenuItem>
                <MobileBottomNav.UserMenuItem
                    text="학습현황"
                    href="/study-status"
                >
                    <BottomMyStatus />
                </MobileBottomNav.UserMenuItem>
            </MobileBottomNav>
        </>
    )
}
