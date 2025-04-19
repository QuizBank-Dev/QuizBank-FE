'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import GroupCard from './GroupCard'
import { useRouter } from 'next/navigation'

const dummyDatas = [
    {
        _id: '65sdf2',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {
            _id: '888888',
            nickname: 'Juni',
            profileImg: '프로필 주소',
        },
        memberCount: 7,
        chatRoom: '99e8a002',
    },
    {
        _id: '65sdf3',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {
            _id: '888888',
            nickname: 'Juni',
            profileImg: '프로필 주소',
        },
        memberCount: 7,
    },
]

export default function GroupSearch() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="그룹 제목 검색"
                className="input-solid input-mobile md:input-pc"
            />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Select defaultValue="total">
                        <SelectTrigger className="w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-5 md:text-pc-body-md">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="total">모든 그룹</SelectItem>
                            <SelectItem value="my">나의 그룹</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                        {'1,026'}개의 결과
                    </div>
                </div>
                <button
                    className="btn-solid btn-mobile-sm md:btn-pc-md"
                    onClick={() => router.push('/group/new')}
                >
                    그룹 생성
                </button>
            </div>
            {dummyDatas.map((data) => (
                <GroupCard key={data._id} data={data}>
                    <div className="flex items-center justify-between">
                        <GroupCard.Name />
                        <div className="flex items-center gap-2 md:gap-4">
                            <GroupCard.MemberCount />
                            <GroupCard.MessageCount />
                        </div>
                    </div>
                    <GroupCard.Description />
                    <div className="flex items-center justify-between">
                        <GroupCard.Owner />
                        <GroupCard.ApplyBtn />
                    </div>
                </GroupCard>
            ))}
        </div>
    )
}
