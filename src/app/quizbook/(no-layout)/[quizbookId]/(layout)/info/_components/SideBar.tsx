'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import UserIcon from '@/assets/svgs/user.svg'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import { ProfileImage } from '@/components'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { QuizbookMeta } from '@/types/quizbook'

export default function SideBar({
    quizbookMeta,
}: {
    quizbookMeta: QuizbookMeta
}) {
    const path = usePathname()
    const { quizbookId } = useParams()

    return (
        <section className="sticky top-8 flex w-[282px] flex-col gap-4 rounded-lg bg-white p-4 font-semi-bold shadow-point">
            <h2 className="pt-2 text-pc-body-lg font-extra-bold">
                {'네트워크 마스터를 위한 OX 퀴즈'}
            </h2>
            <nav className="flex flex-col gap-[10px]">
                <Link
                    href={`/quizbook/${quizbookId}/study`}
                    className="btn-solid btn-pc-md text-center"
                >
                    다시 풀기
                </Link>
                <Link
                    href={`/quizbook/${quizbookId}/solution`}
                    className="btn-solid btn-pc-md text-center"
                >
                    해설 보기
                </Link>
                <Link
                    href={`${path}/include-group`}
                    className="btn-solid btn-pc-md text-center"
                >
                    그룹에 추가하기
                </Link>
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
                    {`${quizbookMeta.quizList.length} 문제`}
                </div>
                <Link
                    href={`/user/${quizbookMeta.author._id}`}
                    className="flex items-center gap-4"
                >
                    <ProfileImage
                        size={24}
                        profileImg={quizbookMeta.author.profileImg}
                    />
                    {quizbookMeta.author.nickname}
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
