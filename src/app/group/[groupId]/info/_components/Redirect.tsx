'use client'

import { redirect, useParams } from 'next/navigation'

export default function Redirect() {
    const { groupId } = useParams()
    redirect(`/group/${groupId}/info`)

    return null
}
