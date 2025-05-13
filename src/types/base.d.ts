/**
 * 성공 응답 타입
 */
export interface Response<T = unknown> {
    status: number
    message: string
    result: T
}

/**
 * 성공 응답(With Pagination) 타입
 */
export type PaginationResponse<T> = Response<{
    data: T
    nextCursor?: Record<string, number | string> | null
    totalCount: number
}>

/**
 * 성공 응답(Without Result) 타입
 */
export type EmptyResponse = Omit<BaseResponse<void>, 'result'>

/**
 * 에러 응답 타입
 */
export interface ErrorResponse {
    statusCode: number
    timestamp: string
    path: string
    message: string
}
