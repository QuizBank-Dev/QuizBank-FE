import {
    QueryClient,
    isServer,
    defaultShouldDehydrateQuery,
} from '@tanstack/react-query'

let browserQueryClient: QueryClient | undefined = undefined

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
    })
}

export const getQueryClient = () => {
    if (isServer) {
        // 서버에서는 요청마다 새로 생성
        return makeQueryClient()
    } else {
        // 브라우저에서는 최초 한 번만 생성
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}
