'use client'

import { redirect, useParams } from 'next/navigation'

export default function StudyPageRedirect() {
    const { quizbookId } = useParams()
    redirect(`/quizbook/${quizbookId}/info`)

    return null
}
