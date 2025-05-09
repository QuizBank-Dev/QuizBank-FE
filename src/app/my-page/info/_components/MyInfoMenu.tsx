'use client'

import Sidebar from '@/components/Sidebar'

import BadgeSvg from '@/assets/svgs/badge.svg'
import PasswordSvg from '@/assets/svgs/password.svg'
import CategorySvg from '@/assets/svgs/category.svg'

const user = {
    _id: '1',
    nickname: 'example',
    profileImg: '',
    introduce: '안녕하세요',
    category: ['자료구조'],
    experience: 0,
    isOAuthAccount: false,
}

export default function MyInfoMenu() {
    return (
        <Sidebar gap={4}>
            <Sidebar.Group>
                <Sidebar.Item
                    icon={<BadgeSvg className="size-5" />}
                    text="보유 뱃지"
                    href="/my-page/info/badge"
                />
            </Sidebar.Group>
            <Sidebar.Group>
                {!user.isOAuthAccount && (
                    <Sidebar.Item
                        icon={<PasswordSvg className="size-5" />}
                        text="비밀번호 변경"
                        href="/my-page/info/change-password"
                    />
                )}
                <Sidebar.Item
                    icon={<CategorySvg className="size-5" />}
                    text="선호 카테고리"
                    subText={
                        user?.category.join(', ') ||
                        '선택된 카테고리가 존재하지 않습니다.'
                    }
                    href="/category"
                />
            </Sidebar.Group>
        </Sidebar>
    )
}
