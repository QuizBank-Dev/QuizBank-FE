'use client'

import { Modal } from '@/components'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const groupList = [
    {
        _id: '65e8a5d6fc13ae5e7f000001',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {},
        chatRoom: '65e8a5d6fc13ae5e7f000002',
        memberCount: '7',
    },
    {
        _id: '65e8a5d6fc13ae5e7f000002',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {},
        chatRoom: '65e8a5d6fc13ae5e7f000002',
        memberCount: '7',
    },
    {
        _id: '65e8a5d6fc13ae5e7f000003',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {},
        chatRoom: '65e8a5d6fc13ae5e7f000002',
        memberCount: '7',
    },
    {
        _id: '65e8a5d6fc13ae5e7f000004',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {},
        chatRoom: '65e8a5d6fc13ae5e7f000002',
        memberCount: '7',
    },
    {
        _id: '65e8a5d6fc13ae5e7f000005',
        name: '서울 강남 cs 공부 스터디',
        description: '서울에 사는 컴공 취준생들의 cs 공부 스터디 그룹입니다.',
        admin: {},
        chatRoom: '65e8a5d6fc13ae5e7f000002',
        memberCount: '7',
    },
]

export default function IncludeGroupModal() {
    const params = useParams()
    // 추후 fetch 로직 추가

    return (
        <Modal title="문제집을 그룹에 추가" closeOnOverlayClick={true}>
            <div className="flex flex-col items-center gap-4">
                <div className="custom-scrollbar flex h-[200px] w-full flex-col items-center gap-8 overflow-auto rounded-lg border-2 border-gray-200 bg-point-50 p-4 md:p-8">
                    {groupList.length === 0 ? (
                        <span className="text-mobile-body-md font-semi-bold text-gray-500 md:text-pc-body-md">
                            소속된 그룹이 없습니다!
                        </span>
                    ) : (
                        groupList.map((data) => (
                            <span
                                key={data._id}
                                className="cursor-pointer font-semi-bold md:text-pc-body-md"
                            >
                                {data.name}
                            </span>
                        ))
                    )}
                </div>
                <Link
                    href={`/group`}
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                >
                    그룹 검색 페이지로 이동
                </Link>
            </div>
        </Modal>
    )
}
