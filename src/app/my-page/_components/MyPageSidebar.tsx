'use client'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Sidebar from '@/components/Sidebar'

import UserSvg from '@/assets/svgs/user.svg'
import SubscriptionSvg from '@/assets/svgs/subscription.svg'
import NotebookSvg from '@/assets/svgs/notebook.svg'
import CommentSvg from '@/assets/svgs/comment.svg'

export default function MyPageSidebar() {
    const pathname = usePathname()

    return (
        <div
            className={clsx(
                'hidden w-full md:block md:w-[230px]',
                pathname === '/my-page/info' && '!block',
            )}
        >
            <Sidebar gap={4}>
                <Sidebar.Group className="hidden md:block">
                    <Sidebar.Item
                        icon={<UserSvg className="size-5" />}
                        text="내 정보"
                        href="/my-page/info"
                    />
                </Sidebar.Group>
                <Sidebar.Group>
                    <Sidebar.Item
                        icon={<SubscriptionSvg className="size-5" />}
                        text="구독자 관리"
                        href="/my-page/follower"
                    />
                    <Sidebar.Item
                        icon={<NotebookSvg className="size-5" />}
                        text="내가 만든 문제집"
                        href="/my-page/quizbook"
                    />
                    <Sidebar.Item
                        icon={<CommentSvg className="size-5" />}
                        text="내가 작성한 댓글"
                        href="/my-page/comment"
                    />
                </Sidebar.Group>
            </Sidebar>
        </div>
    )
}
