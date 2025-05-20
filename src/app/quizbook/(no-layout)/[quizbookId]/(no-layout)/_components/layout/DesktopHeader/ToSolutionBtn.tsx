'use client'

import { useParams, useRouter } from 'next/navigation'

export default function ToSolutionBtn() {
    const router = useRouter()
    const { quizbookId } = useParams()

    return (
        <>
            <button
                onClick={() =>
                    router.replace(`/quizbook/${quizbookId}/solution`)
                }
                className="btn-solid btn-mobile-md flex gap-[8px] md:btn-pc-md"
            >
                해설보기
            </button>
        </>
    )
}
