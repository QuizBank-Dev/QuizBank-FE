'use client'

import clsx from 'clsx'
import { useEffect, useRef } from 'react'

interface InfiniteScrollProps {
    children: React.ReactNode
    isPending: boolean
    hasNextPage: boolean
    isFetchingNextPage: boolean
    fetchNextPage: () => void
    SkeletonUI?: React.ReactNode
    className?: string
    rootRef?: React.RefObject<HTMLElement | null>
}

export default function InfiniteScrollContainer({
    children,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    SkeletonUI,
    className = '',
    rootRef,
}: InfiniteScrollProps) {
    const observerRef = useRef<IntersectionObserver | null>(null)
    const loadMoreRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = loadMoreRef.current
        const rootEl = rootRef?.current ?? null

        if (!el) return

        observerRef.current = new IntersectionObserver(
            async (entries) => {
                const target = entries[0]
                if (
                    target.isIntersecting &&
                    hasNextPage &&
                    !isFetchingNextPage
                ) {
                    await fetchNextPage()
                }
            },
            {
                root: rootEl, // ← rootRef가 없으면 뷰포트 기준(null)
                threshold: 1.0,
            },
        )

        observerRef.current.observe(el)

        return () => {
            observerRef.current?.unobserve(el)
            observerRef.current?.disconnect()
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage, rootRef])

    return (
        <div className={className}>
            {isPending && SkeletonUI ? SkeletonUI : children}
            {/* 최하단 감지용 div */}
            <div
                ref={loadMoreRef}
                className={clsx(
                    'w-full text-center text-mobile-body-lg font-semi-bold md:text-pc-body-lg',
                    !hasNextPage && 'hidden',
                )}
            >
                {isFetchingNextPage && '로딩 중...'}
            </div>
        </div>
    )
}
