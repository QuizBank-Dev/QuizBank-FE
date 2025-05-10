import { ProfileImage } from '@/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    data: {
        _id: string
        nickname: string
        profileImg: string
        email: string
    }
    status: '방장' | '그룹원' | '가입 요청중'
    myId: string
    isOwner: boolean
}

export default function GroupMember({ data, status, myId, isOwner }: Props) {
    const path = usePathname()

    return (
        <>
            <article className="hidden w-full items-center gap-5 rounded-lg bg-white p-4 text-pc-body-md font-semi-bold shadow-point md:flex">
                <div className="cursor-pointer">
                    <ProfileImage size={32} profileImg={data.profileImg} />
                </div>
                <div className="block w-0 flex-[2] break-words">
                    <span className="cursor-pointer">{data.nickname}</span>
                </div>
                <div className="h-8 border-1 border-white" />
                <span className="block w-0 flex-[4] break-words">
                    {data.email}
                </span>
                <div className="h-8 border-1 border-white" />
                <div className="flex w-full flex-[7] items-center justify-between">
                    {status}
                    <div className="flex gap-2">
                        {data._id === myId && (
                            <Link
                                className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                href={`${path}/withdraw`}
                            >
                                탈퇴
                            </Link>
                        )}
                        {isOwner && status === '그룹원' && (
                            <>
                                <Link
                                    className="rounded-lg bg-point-500 px-3 py-2 text-white"
                                    href={`${path}/change-owner/${data._id}`}
                                >
                                    위임
                                </Link>
                                <Link
                                    className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                    href={`${path}/delete-member/${data._id}`}
                                >
                                    강퇴
                                </Link>
                            </>
                        )}
                        {isOwner && status === '가입 요청중' && (
                            <>
                                <Link
                                    className="rounded-lg bg-point-500 px-3 py-2 text-white"
                                    href={`${path}/accept-apply/${data._id}`}
                                >
                                    수락
                                </Link>
                                <Link
                                    className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                    href={`${path}/reject-apply/${data._id}`}
                                >
                                    거절
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </article>
            <article className="flex w-full flex-col items-start gap-2 rounded-lg bg-white p-4 font-semi-bold shadow-point md:hidden">
                <div className="flex cursor-pointer items-center gap-2">
                    <ProfileImage size={32} profileImg={data.profileImg} />
                    <span className="text-mobile-body-md">{data.nickname}</span>
                </div>
                <span className="text-mobile-body-md">{data.email}</span>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <span className="text-mobile-body-lg text-point-500">
                            역할
                        </span>
                        <span className="text-mobile-body-md">{status}</span>
                    </div>
                    <div className="flex gap-4 text-mobile-body-md">
                        {data._id === myId && (
                            <Link
                                className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                href={`${path}/withdraw`}
                            >
                                탈퇴
                            </Link>
                        )}
                        {isOwner && status === '그룹원' && (
                            <>
                                <Link
                                    className="rounded-lg bg-point-500 px-3 py-2 text-white"
                                    href={`${path}/change-owner/${data._id}`}
                                >
                                    위임
                                </Link>
                                <Link
                                    className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                    href={`${path}/delete-member/${data._id}`}
                                >
                                    강퇴
                                </Link>
                            </>
                        )}
                        {isOwner && status === '가입 요청중' && (
                            <>
                                <Link
                                    className="rounded-lg bg-point-500 px-3 py-2 text-white"
                                    href={`${path}/accept-apply/${data._id}`}
                                >
                                    수락
                                </Link>
                                <Link
                                    className="rounded-lg bg-danger-300 px-3 py-2 text-white"
                                    href={`${path}/reject-apply/${data._id}`}
                                >
                                    거절
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </article>
        </>
    )
}
