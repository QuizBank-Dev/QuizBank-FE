'use client'

import HeartOutlineIcon from '@/assets/svgs/heart-outline.svg'
import ShareIcon from '@/assets/svgs/share.svg'
import { useCurrentUser } from '@/hooks/queries/user'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { toast } from 'sonner'

export default function MobileBottomNav() {
    const path = usePathname()
    const { quizbookId } = useParams()
    const { data: userData } = useCurrentUser()

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
                {userData && (
                    <button className="btn-outline p-2">
                        <HeartOutlineIcon className="size-4" />
                    </button>
                )}
                <button className="btn-outline p-2" onClick={handleCopyUrl}>
                    <ShareIcon className="size-4" />
                </button>
            </div>
        </nav>
    )
}
