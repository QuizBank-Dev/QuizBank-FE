import axiosInstance from '@/lib/api/base'
import { EmptyResponse } from '@/types/base'
import { CategoryType } from '@/constants/common/category'

/**
 * 선호 카테고리 선택 함수
 * @param categories 카테고리 목록
 */
export const setCategory = (categories: CategoryType[]) => {
    return axiosInstance.put<EmptyResponse>('v1/category', { categories })
}
