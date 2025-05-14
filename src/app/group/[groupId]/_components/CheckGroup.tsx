'use client'

import { useGroupQuery } from '@/hooks/queries/group'
import { notFound, useParams } from 'next/navigation'

export default function CheckGroup() {
    const { groupId } = useParams()
    const { error } = useGroupQuery(groupId as string)
    if (error) notFound()

    return null
}
