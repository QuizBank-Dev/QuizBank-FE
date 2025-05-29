'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useCurrentUser } from '@/hooks/queries/user'
import { BadgeBoard, RecentStudyBoard } from '@/app/dashboard/_components'
import LoginSvg from '@/assets/svgs/login.svg'
import TitleWithMore from '../TitleWithMore'
import WeeklyStudyTracker from './WeeklyStudyTracker'

export default function StudyDashboard() {
    const { data: user } = useCurrentUser()
    return (
        <section className="flex flex-col gap-[16px] pb-4">
            <TitleWithMore title="학습 현황" link="/dashboard" loginRequired />
            <div className="relative">
                <div
                    className={clsx(
                        'flex flex-col gap-[16px] lg:flex-row',
                        !user && 'blur',
                    )}
                >
                    <BadgeBoard className="lg:order-2" />
                    <div className="grid min-w-0 flex-1 grid-rows-[1fr_1fr] gap-[16px]">
                        <RecentStudyBoard />
                        <WeeklyStudyTracker loginUser={user} />
                    </div>
                </div>
                {!user && (
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 text-center">
                        <p className="text-mobile-body-lg md:text-pc-body-lg">
                            로그인하고 나의 학습 현황을 확인해보세요!
                        </p>
                        <Link
                            href="/login"
                            className="btn-solid btn-mobile-lg flex items-center gap-2 md:btn-pc-lg"
                        >
                            <LoginSvg className="size-5" />
                            <span>로그인하기</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
