'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import UserIcon from '@/assets/svgs/user.svg'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import { ProfileImage } from '@/components'
import Link from 'next/link'

export default function SideBar() {
    // 추후 인증 로직 추가

    return (
        <section className="sticky top-8 flex w-[282px] flex-col gap-4 rounded-lg bg-white p-4 font-semi-bold shadow-point">
            <h2 className="pt-2 text-pc-body-lg font-extra-bold">
                {'네트워크 마스터를 위한 OX 퀴즈'}
            </h2>
            <nav className="flex flex-col gap-[10px]">
                <button className="btn-solid btn-pc-md">다시 풀기</button>
                <button className="btn-solid btn-pc-md">해설 보기</button>
                <button className="btn-solid btn-pc-md">그룹에 추가하기</button>
                <div className="flex w-full gap-[10px]">
                    <button className="h-auth btn-outline btn-pc-md flex flex-1 items-center justify-center gap-2">
                        <HeartOutlineIcon className="size-5" />
                        찜하기
                    </button>
                    <button className="h-auth btn-outline btn-pc-md flex flex-1 items-center justify-center gap-2">
                        <ShareIcon className="size-5" />
                        공유
                    </button>
                </div>
            </nav>
            <div className="flex flex-col gap-4 text-pc-body-lg">
                <div className="flex items-center gap-4">
                    <NoteIcon className="size-6 text-gray-400" />
                    {'20문제'}
                </div>
                <Link href={`/user/${666}`} className="flex items-center gap-4">
                    <ProfileImage size={24} profileImg={''} />
                    {'쭈니'}
                </Link>
                <div className="flex items-center gap-4">
                    <UserIcon className="size-6 text-gray-400" />
                    {'78.5% (학습자 121명)'}
                </div>
                <div className="flex items-center gap-4">
                    <StarFullIcon className="size-6 text-[#FFCC00]" />
                    {'4.3 (후기 53개)'}
                </div>
            </div>
        </section>
    )
}
