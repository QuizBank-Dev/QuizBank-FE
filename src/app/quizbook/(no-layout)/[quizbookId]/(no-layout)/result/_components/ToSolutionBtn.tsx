'use client'

import OtherSightSvg from '@/assets/svgs/other-sight.svg'

import { useParams, useRouter } from 'next/navigation'

export default function ToSolutionBtn() {
    const router = useRouter()
    const { quizbookId } = useParams()

    return (
        <button
            className="flex flex-col items-center text-mobile-body-md"
            onClick={() => router.replace(`/quizbook/${quizbookId}/solution`)}
        >
            <OtherSightSvg className="size-6" />
            해설보기
        </button>
    )
}
