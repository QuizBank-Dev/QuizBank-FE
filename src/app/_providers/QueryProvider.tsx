'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface Props {
    children: React.ReactNode
}

export const QueryProvider = ({ children }: Props) => {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
