'use client'

import CloseSvg from '@/assets/svgs/close.svg'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

interface ModalProps {
    title?: string
    children?: React.ReactNode
    closeOnOverlayClick?: boolean // 배경 클릭으로 닫기 여부 제어
    className?: string
}

export default function Modal({
    title,
    children,
    closeOnOverlayClick = false, // 기본값은 false로 설정 (= 배경 클릭으로 닫기 비활성화)
    className = '',
}: ModalProps) {
    const router = useRouter()

    // ESC 키로 모달 닫기 가능
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                router.back()
            }
        }

        window.addEventListener('keydown', handleEscKey)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleEscKey)
            document.body.style.overflow = 'auto'
        }
    }, [router])

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            router.back()
        }
    }

    return (
        <div
            className="absolute inset-0 z-20 flex min-h-screen w-full flex-col items-center justify-center bg-gray-900 bg-opacity-70 px-[16px] backdrop-blur-sm md:px-[32px]"
            onClick={handleOverlayClick}
        >
            {/* 모달 컨텐츠 영역 */}
            <div
                className="flex max-h-[70vh] w-full max-w-[768px] flex-col gap-[16px] overflow-hidden rounded-lg bg-white py-[16px]"
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                {/* 타이틀 & 닫기버튼 */}
                <div className="flex items-center justify-center px-[16px] md:px-[32px]">
                    {title && (
                        <h2
                            id="modal-title"
                            className="flex-1 pl-[24px] text-center text-mobile-title-sm font-semi-bold md:text-pc-title-sm"
                        >
                            {title}
                        </h2>
                    )}
                    <button
                        className="hover:text-point-500"
                        onClick={() => router.back()}
                        aria-label="닫기"
                    >
                        <CloseSvg className="h-[24px] w-[24px]" />
                    </button>
                </div>

                <div
                    className={clsx(
                        'custom-scrollbar flex-1 grow overflow-y-auto px-[16px] md:px-[32px]',
                        className,
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
