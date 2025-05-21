'use client'

import { redirect, useParams } from 'next/navigation'

export default function Redirect() {
    const { groupId, quizbookId } = useParams()
    redirect(`/group/${groupId}/quizbook/${quizbookId}/detail`)

    return null
}
