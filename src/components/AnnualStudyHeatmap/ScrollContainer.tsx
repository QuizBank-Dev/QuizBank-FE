import { useRef } from 'react'

interface ScrollContainerProps {
    children: React.ReactNode
    className?: string
}

export default function ScrollContainer({
    children,
    className,
}: ScrollContainerProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const isDown = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return
        isDown.current = true
        startX.current = e.pageX - scrollRef.current.offsetLeft
        scrollLeft.current = scrollRef.current.scrollLeft
        scrollRef.current.style.cursor = 'grabbing'
    }

    const onMouseLeave = () => {
        isDown.current = false
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
    }

    const onMouseUp = () => {
        isDown.current = false
        if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
    }

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDown.current || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX.current) * 1.5 // 스크롤 속도
        scrollRef.current.scrollLeft = scrollLeft.current - walk
    }

    return (
        <div
            ref={scrollRef}
            className={className}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            {children}
        </div>
    )
}
