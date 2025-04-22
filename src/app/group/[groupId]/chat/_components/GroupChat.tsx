'use client'

import { ProfileImage } from '@/components'

const dummyDatas = [
    {
        _id: '65e8a5d6fc13ae5e7f000001',
        content: '안녕하세요~',
        author: {
            _id: 'aaaaa',
            nickname: '닉네임1',
            profileImg: '',
        },
        createdAt: '2025-04-07',
    },
    {
        _id: '65e8a5d6fc13ae5e7f000002',
        content: '반가워요~',
        author: {
            _id: 'bbbbb',
            nickname: '닉네임2',
            profileImg: '',
        },
        createdAt: '2025-04-07',
    },
]

export default function GroupChat({ groupId }: { groupId: string }) {
    return (
        <section className="flex w-full flex-1 flex-col rounded-lg bg-white p-4 shadow-point md:px-8">
            <div className="flex w-full flex-1 flex-col"></div>
            <form className="flex items-center gap-4 border-t-1 border-gray-300 pt-4 md:px-4">
                <div className="h-8 w-8">
                    <ProfileImage size={32} profileImg={''} />
                </div>
                <input
                    type="text"
                    className="btn-outline btn-pc-md w-full font-regular text-gray-900"
                />
            </form>
        </section>
    )
}
