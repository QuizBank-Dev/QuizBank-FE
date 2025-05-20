'use server'

import { ErrorResponse, Response } from '@/types/base'
import { StudyResult } from '@/types/study'
import { getServerToken } from '@/utils/getServerToken'

/**
 * 서버 전용 학습 결과 조회
 * @param quizbookId 문제집의 ObjectId
 * @returns StudyResult 타입의 데이터
 */
export const getStudyResult = async (quizbookId: string) => {
    try {
        const token = await getServerToken()

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/study/quizbook/${quizbookId}/result`,
            {
                method: 'GET',
                headers: {
                    cookie: token,
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            const error: ErrorResponse = await res.json().catch(() => null)
            const msg =
                error.message ?? `학습 결과 조회 실패 (status: ${res.status})`

            throw new Error(msg)
        }

        const data: Response<StudyResult> = await res.json()
        return data.result
    } catch (e) {
        if (e instanceof Error) throw e

        throw new Error('알 수 없는 에러가 발생했습니다.')
    }
}
