import axiosInstance from '@/lib/api/base'
import { PaginationResponse } from '@/types/base'
import { Quizbook } from '@/types/quizbook'
import { PaginationParams } from '@/types/api/base'

/**
 * 특정 사용자가 생성한 문제집 리스트를 가져오는 함수
 * @param authorId 특정 사용자의 아이디 (내가 만든 문제집의 경우 `me`)
 * @param params
 */
export const getAuthorQuizbookList = async (
    authorId: 'me' | string,
    params: PaginationParams,
) => {
    const res = await axiosInstance.get<PaginationResponse<Quizbook<string>[]>>(
        `v1/quizbook/author/${authorId}`,
        { params },
    )
    return res.data
}
