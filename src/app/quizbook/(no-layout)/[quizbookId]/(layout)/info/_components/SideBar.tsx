'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import HeartFillIcon from '@/assets/svgs/heart-fill.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import UserIcon from '@/assets/svgs/user.svg'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import { ProfileImage } from '@/components'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { QuizbookMeta } from '@/types/quizbook'
import { toast } from 'sonner'
import { useCurrentUser } from '@/hooks/queries/user'
import { usePostQuizbookLike } from '@/hooks/mutations/like'
import { useQuizbookUserFlagsQuery } from '@/hooks/queries/like'
import { useQuizbookStatesQuery } from '@/hooks/queries/quizbook'

export default function SideBar({
    quizbookMeta,
}: {
    quizbookMeta: QuizbookMeta
}) {
    const path = usePathname()
    const { quizbookId } = useParams()
    const { data: statesData } = useQuizbookStatesQuery(quizbookId as string)
    const { data: userData } = useCurrentUser()
    const { data: flagsData } = useQuizbookUserFlagsQuery(quizbookId as string)
    const { mutate, isPending } = usePostQuizbookLike(quizbookId as string)

    const handleCopyUrl = async () => {
        try {
            const fullUrl = `${window.location.origin}${path}`
            await navigator.clipboard.writeText(fullUrl)
            toast('링크 COPY 완료!')
        } catch (_) {
            toast('링크 COPY 실패!')
        }
    }

    return (
        <section className="sticky top-8 flex w-[282px] flex-col gap-4 rounded-lg bg-white p-4 font-semi-bold shadow-point">
            <h2 className="pt-2 text-pc-body-lg font-extra-bold">
                {quizbookMeta.title}
            </h2>
            <nav className="flex flex-col gap-[10px]">
                {userData && (
                    <>
                        {flagsData &&
                            (flagsData.isStudied ? (
                                <>
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
                                </>
                            ) : (
                                <Link
                                    href={`/quizbook/${quizbookId}/study`}
                                    className="btn-solid btn-pc-md text-center"
                                >
                                    문제집 풀기
                                </Link>
                            ))}
                        <Link
                            href={`${path}/include-group`}
                            className="btn-solid btn-pc-md text-center"
                        >
                            그룹에 추가하기
                        </Link>
                    </>
                )}
                <div className="flex w-full gap-[10px]">
                    {userData ? (
                        <button
                            className="h-auth btn-outline btn-pc-md flex flex-1 items-center justify-center gap-2"
                            onClick={() => mutate()}
                            disabled={isPending}
                        >
                            {flagsData &&
                                (flagsData.isLiked ? (
                                    <HeartFillIcon className="size-5" />
                                ) : (
                                    <HeartOutlineIcon className="size-5" />
                                ))}
                            찜하기
                        </button>
                    ) : (
                        <Link
                            href={`/login`}
                            className="btn-solid btn-pc-md flex flex-1 items-center justify-center"
                        >
                            로그인
                        </Link>
                    )}
                    <button
                        className="btn-outline btn-pc-md flex flex-1 items-center justify-center gap-2"
                        onClick={handleCopyUrl}
                    >
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
                    <StarFullIcon className="size-6 text-[#FFCC00]" />
                    {`${statesData ? statesData.reviewRating : '--'} (후기 ${statesData ? statesData.reviewCount.toLocaleString('en-US') : '--'}개)`}
                </div>
                <div className="flex items-center gap-4">
                    <UserIcon className="size-6 text-gray-400" />
                    {`${statesData ? (statesData.solvedCount !== 0 ? ((statesData.solvedScore / (statesData.solvedCount * statesData.totalScore)) * 100).toFixed(1) : '--') : '--'}% (학습자 ${statesData ? statesData.solvedCount.toLocaleString('en-US') : '--'}명)`}
                </div>
            </div>
        </section>
    )
}
