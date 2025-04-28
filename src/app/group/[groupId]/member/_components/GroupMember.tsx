import { ProfileImage } from '@/components'

interface Props {
    groupId: string
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

export default function GroupMember({
    groupId,
    data,
    status,
    myId,
    isOwner,
}: Props) {
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
                            <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                탈퇴
                            </button>
                        )}
                        {isOwner && status === '그룹원' && (
                            <>
                                <button className="rounded-lg bg-point-500 px-3 py-2 text-white">
                                    위임
                                </button>
                                <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                    강퇴
                                </button>
                            </>
                        )}
                        {isOwner && status === '가입 요청중' && (
                            <>
                                <button className="rounded-lg bg-point-500 px-3 py-2 text-white">
                                    수락
                                </button>
                                <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                    거절
                                </button>
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
                            <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                탈퇴
                            </button>
                        )}
                        {isOwner && status === '그룹원' && (
                            <>
                                <button className="rounded-lg bg-point-500 px-3 py-2 text-white">
                                    위임
                                </button>
                                <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                    강퇴
                                </button>
                            </>
                        )}
                        {isOwner && status === '가입 요청중' && (
                            <>
                                <button className="rounded-lg bg-point-500 px-3 py-2 text-white">
                                    수락
                                </button>
                                <button className="rounded-lg bg-danger-300 px-3 py-2 text-white">
                                    거절
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </article>
        </>
    )
}
