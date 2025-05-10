'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import UserIcon from '@/assets/svgs/user.svg'
import { useEffect, useState } from 'react'
import GroupMember from './GroupMember'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useCurrentUser, useGroupQuery } from '@/hooks/queries'
import { Skeleton } from '@/components/ui/skeleton'

export default function GroupMemberList() {
    const [status, setStatus] = useState('member')
    const path = usePathname()
    const { groupId } = useParams()
    const router = useRouter()
    const { data: groupData, error } = useGroupQuery(groupId as string)
    const { data: userData } = useCurrentUser()

    useEffect(() => {
        if (error) {
            router.push('/group')
        }
    }, [error, router])

    return (
        <section className="mb-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="member">그룹원</SelectItem>
                            <SelectItem value="applying">가입 요청</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center gap-1">
                        <UserIcon className="size-5 text-point-200" />
                        <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                            {status === 'member'
                                ? groupData?.memberList.length
                                : groupData?.applyingUserList.length}
                        </div>
                    </div>
                </div>
                <Link
                    className="btn-solid btn-mobile-sm md:btn-pc-md"
                    href={`${path}/invite`}
                >
                    그룹 초대
                </Link>
            </div>
            <div className="hidden w-full items-center gap-5 rounded-lg bg-point-100 px-4 py-[10px] text-pc-body-md font-semi-bold text-point-700 md:flex">
                <div className="h-8 w-8" />
                <span className="flex-[2]">닉네임</span>
                <div className="h-8 border-1 border-white" />
                <span className="flex-[4]">ID</span>
                <div className="h-8 border-1 border-white" />
                <span className="flex-[7]">역할</span>
            </div>
            {!groupData || !userData ? (
                <div className="flex w-full flex-col items-start gap-2 rounded-lg bg-white p-4 shadow-point md:flex-row md:items-center md:gap-5">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-6 w-full rounded-lg" />
                    <Skeleton className="block h-6 w-full rounded-lg md:hidden" />
                </div>
            ) : (
                (status === 'member'
                    ? groupData.memberList
                    : groupData.applyingUserList
                ).map((data, index) => (
                    <GroupMember
                        key={data._id}
                        data={data}
                        status={
                            status === 'member'
                                ? index === 0
                                    ? '방장'
                                    : '그룹원'
                                : '가입 요청'
                        }
                        myId={userData._id}
                        isOwner={groupData.admin._id === userData._id}
                    />
                ))
            )}
        </section>
    )
}
