'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import HeartFillIcon from '@/assets/svgs/heart-fill.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import { useCurrentUser } from '@/hooks/queries/user'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { toast } from 'sonner'
import { usePostQuizbookLike } from '@/hooks/mutations/like'
import { useQuizbookUserFlagsQuery } from '@/hooks/queries/like'

export default function MobileBottomNav() {
    const path = usePathname()
    const { quizbookId } = useParams()
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
        <nav className="flex w-full items-center justify-between bg-white px-4 py-3 md:hidden">
            <div className="flex items-center gap-2">
                {userData ? (
                    <>
                        {flagsData &&
                            (flagsData.isStudied ? (
                                <>
                                    <Link
                                        href={`/quizbook/${quizbookId}/study`}
                                        className="btn-solid btn-mobile-sm py-3"
                                    >
                                        다시 풀기
                                    </Link>
                                    <Link
                                        href={`/quizbook/${quizbookId}/solution`}
                                        className="btn-solid btn-mobile-sm py-3"
                                    >
                                        해설
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    href={`/quizbook/${quizbookId}/study`}
                                    className="btn-solid btn-mobile-sm py-3"
                                >
                                    문제집 풀기
                                </Link>
                            ))}

                        <Link
                            href={`${path}/include-group`}
                            className="btn-solid btn-mobile-sm py-3"
                        >
                            그룹에 추가
                        </Link>
                    </>
                ) : (
                    <div>로그인을 하면 풀어볼 수 있어요!</div>
                )}
            </div>
            <div className="flex items-center gap-2">
                {userData && flagsData && (
                    <button
                        className="btn-outline p-2"
                        onClick={() => mutate()}
                        disabled={isPending}
                    >
                        {flagsData.isLiked ? (
                            <HeartFillIcon className="size-4" />
                        ) : (
                            <HeartOutlineIcon className="size-4" />
                        )}
                    </button>
                )}
                <button className="btn-outline p-2" onClick={handleCopyUrl}>
                    <ShareIcon className="size-4" />
                </button>
            </div>
        </nav>
    )
}
