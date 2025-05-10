import {
    QueryClient,
    defaultShouldDehydrateQuery,
    QueryCache,
    MutationCache,
} from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

let browserQueryClient: QueryClient | undefined = undefined

const isClient = typeof window !== 'undefined'

const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            dehydrate: {
                // pending 상태의 쿼리를 클라이언트에서 이어받도록 설정
                shouldDehydrateQuery: (query) =>
                    defaultShouldDehydrateQuery(query) ||
                    query.state.status === 'pending',
            },
        },
        queryCache: new QueryCache({
            onError: (error, query) => {
                const meta = query?.meta as Record<string, boolean>
                if (isClient && !meta?.ignoreGlobalError) {
                    let message = '알 수 없는 에러가 발생했습니다.'
                    if (axios.isAxiosError(error)) {
                        // 서버에서 내려준 메시지 우선
                        message = error.response?.data?.message || error.message
                    } else if (error instanceof Error) {
                        message = error.message
                    }
                    toast(message)
                }
            },
        }),
        mutationCache: new MutationCache({
            onError: (error, _a, _b, mutation) => {
                const meta = mutation?.meta as Record<string, boolean>
                if (isClient && !meta?.ignoreGlobalError) {
                    let message = '알 수 없는 에러가 발생했습니다.'
                    if (axios.isAxiosError(error)) {
                        // 서버에서 내려준 메시지 우선
                        message = error.response?.data?.message || error.message
                    } else if (error instanceof Error) {
                        message = error.message
                    }
                    toast(message)
                }
            },
        }),
    })
}

export const getQueryClient = () => {
    if (isClient && !browserQueryClient) {
        // 브라우저에서는 최초 한 번만 생성
        browserQueryClient = makeQueryClient()
    }
    return !browserQueryClient ? makeQueryClient() : browserQueryClient
}
