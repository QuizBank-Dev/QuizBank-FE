import BottomHome from '@/assets/svgs/bottom-home.svg'
import BottomQuizbook from '@/assets/svgs/bottom-quizbook.svg'
import BottomGroup from '@/assets/svgs/bottom-group.svg'
import BottomMyStatus from '@/assets/svgs/bottom-my-status.svg'
import MenuItem from './MenuItem'
import UserMenuItem from './UserMenuItem'

interface Prop {
    children?: React.ReactNode
}

export default function MobileBottomNavRoot({ children }: Prop) {
    const isCustom = !!children

    return (
        <nav className="flex w-full justify-center border-t-[0.25px] border-point-100 bg-transparent text-point-100 md:hidden">
            {isCustom ? (
                children
            ) : (
                <>
                    <MenuItem text="홈" href="/">
                        <BottomHome />
                    </MenuItem>
                    <MenuItem text="문제집" href="/quizbook">
                        <BottomQuizbook />
                    </MenuItem>
                    <MenuItem text="그룹" href="/group">
                        <BottomGroup />
                    </MenuItem>
                    <UserMenuItem text="학습현황" href="/dashboard">
                        <BottomMyStatus />
                    </UserMenuItem>
                </>
            )}
        </nav>
    )
}
