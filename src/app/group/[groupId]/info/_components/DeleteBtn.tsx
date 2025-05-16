'use client'

import { useGroupQuery } from '@/hooks/queries/group'
import { useCurrentUser } from '@/hooks/queries/user'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function DeleteBtn() {
    const { groupId } = useParams()
    const { data: groupData } = useGroupQuery(groupId as string)
    const { data: userData } = useCurrentUser()

    return groupData?.admin._id === userData?._id ? (
        <Link
            href={`/group/${groupId}/info/delete`}
            className="text-mobile-body-sm font-regular text-gray-500 underline md:text-pc-body-sm"
        >
            그룹 삭제
        </Link>
    ) : (
        <div></div>
    )
}
