'use client'

import { useGroupQuery } from '@/hooks/queries/group'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CheckGroup() {
    const { groupId } = useParams()
    const router = useRouter()
    const { error } = useGroupQuery(groupId as string)

    useEffect(() => {
        if (error) {
            router.push('/group')
        }
    }, [groupId, router, error])

    return null
}
