'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import UserIcon from '@/assets/svgs/user.svg'
import { useState } from 'react'
import GroupMember from './GroupMember'

const dummyData = {
    _id: '65e8a5d6fc13ae5e7f000002',
    name: '서울 강남 cs 공부 스터디',
    description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
    admin: {
        _id: '1',
        nickname: '쭈니',
        profileImg: '',
        email: 'test11111@naver.com',
    },
    memberList: [
        {
            _id: '1',
            nickname: '쭈니',
            profileImg: '',
            email: 'test11111@naver.com',
        },
        {
            _id: '2',
            nickname: '쭈니2',
            profileImg: '',
            email: 'test22222@naver.com',
        },
        {
            _id: '3',
            nickname: '쭈니3',
            profileImg: '',
            email: 'test33333@naver.com',
        },
    ],
    applyingUserList: [
        {
            _id: '4',
            nickname: '쭈니4',
            profileImg: '',
            email: 'test44444@naver.com',
        },
        {
            _id: '5',
            nickname: '쭈니5',
            profileImg: '',
            email: 'test55555@naver.com',
        },
    ],
    chatRoom: '65e8a5d6fc13ae5e7f000002',
    createdAt: '2025-03-30',
}

export default function GroupMemberList({ groupId }: { groupId: string }) {
    const [status, setStatus] = useState('member')

    return (
        <section className="flex flex-col gap-4 md:mb-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="member">그룹원</SelectItem>
                            <SelectItem value="applying">
                                가입 요청중
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center gap-1">
                        <UserIcon className="size-5 text-point-200" />
                        <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                            {status === 'member'
                                ? dummyData.memberList.length
                                : dummyData.applyingUserList.length}
                        </div>
                    </div>
                </div>
                <button
                    className="btn-solid btn-mobile-sm md:btn-pc-md"
                    onClick={() => {
                        // 추후 병렬 라우트로 모달 생성
                    }}
                >
                    그룹 초대
                </button>
            </div>
            <div className="hidden w-full items-center gap-5 rounded-lg bg-point-100 px-4 py-[10px] text-pc-body-md font-semi-bold text-point-700 md:flex">
                <div className="h-8 w-8" />
                <span className="flex-[2]">닉네임</span>
                <div className="h-8 border-1 border-white" />
                <span className="flex-[4]">이메일</span>
                <div className="h-8 border-1 border-white" />
                <span className="flex-[7]">역할</span>
            </div>
            {(status === 'member'
                ? dummyData.memberList
                : dummyData.applyingUserList
            ).map((data, index) => (
                <GroupMember
                    key={data._id}
                    groupId={groupId}
                    data={data}
                    status={
                        status === 'member'
                            ? index === 0
                                ? '방장'
                                : '그룹원'
                            : '가입 요청중'
                    }
                    myId={'2'}
                    isOwner={dummyData.admin._id === '2'}
                />
            ))}
        </section>
    )
}
