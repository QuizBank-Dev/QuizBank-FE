import { CategoryType } from '@/constants/common/category'
import { PaginationParams } from './base'

export type QuizbookSortType = 'latest' | 'rating'

/**
 * 문제집 리스트 조회 쿼리 Params 타입
 */
export interface QuizbookListParams extends PaginationParams {
    keyword?: string
    category?: CategoryType
    sort?: QuizbookSortType
}
