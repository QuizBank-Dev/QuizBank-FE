import {
    QueryClient,
    defaultShouldDehydrateQuery,
    QueryCache,
} from '@tanstack/react-query'
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
                    toast(error.message)
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
