import { useEffect, useRef } from 'react'

interface Props {
    rootRef: React.RefObject<HTMLDivElement | null>
    fetchNextPage: () => void
    hasNextPage: boolean
    isFetchingNextPage: boolean
}

export const useInfiniteScrollTrigger = ({
    rootRef,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
}: Props) => {
    const triggerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (
            !triggerRef.current ||
            !rootRef?.current ||
            !hasNextPage ||
            isFetchingNextPage
        )
            return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    hasNextPage &&
                    !isFetchingNextPage
                ) {
                    fetchNextPage()
                }
            },
            {
                root: rootRef.current,
                threshold: 1.0,
            },
        )

        observer.observe(triggerRef.current)

        return () => observer.disconnect()
    }, [rootRef, fetchNextPage, hasNextPage, isFetchingNextPage])

    return triggerRef
}
