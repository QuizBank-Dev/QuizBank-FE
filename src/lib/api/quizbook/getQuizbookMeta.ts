import { Response } from '@/types/base'
import { QuizbookMeta } from '@/types/quizbook'

/**
 * 문제집 메타데이터 조회
 * Next fetch 사용
 * @param quizbookId 조회할 문제집의 ObjectId
 * @returns 문제집의 메타데이터(QuizbookMeta 타입)
 */
export const getQuizbookMeta = async (
    quizbookId: string,
): Promise<QuizbookMeta> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/quizbook/${quizbookId}/meta-data`,
            {
                method: 'GET',
                cache: 'force-cache',
                next: {
                    tags: [`quizbook-meta-${quizbookId}`],
                    revalidate: 31536000,
                },
            },
        )

        if (!res.ok) {
            const error = await res.json().catch(() => null)
            const msg =
                error.message ??
                `문제집의 메타데이터 조회 실패 (status: ${res.status})`

            throw new Error(msg)
        }

        const data: Response<QuizbookMeta> = await res.json()
        return data.result
    } catch (e) {
        if (e instanceof Error) throw e

        throw new Error('알 수 없는 에러가 발생했습니다.')
    }
}
