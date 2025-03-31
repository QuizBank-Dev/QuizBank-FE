'use client'
import React, { ReactNode, useEffect } from 'react'
import XCloseSvg from '@/assets/svgs/close.svg'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
    closeOnOverlayClick?: boolean // 배경 클릭으로 닫기 여부 제어
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    closeOnOverlayClick = false, // 기본값은 false로 설정 (= 배경 클릭으로 닫기 비활성화)
}: ModalProps) {
    // ESC 키로 모달 닫기 가능
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEscKey)

        // 모달이 열릴 때 body 스크롤 방지
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen, onClose])

    // 모달이 닫혀있으면 렌더링하지 않음
    if (!isOpen) return null

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm"
                onClick={handleOverlayClick}
                aria-hidden="true"
            />

            {/* 모달 컨테이너 */}
            <div
                className="z-60 relative w-[90%] max-w-[600px] rounded-lg bg-white px-[16px] py-[16px] shadow-lg md:px-[32px]"
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                <button
                    className="absolute right-[16px] top-[16px] hover:text-point-500"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <XCloseSvg className="h-[24px] w-[24px]" />
                </button>

                {/* 타이틀 렌더링 (있는 경우) */}
                {title && (
                    <h2
                        id="modal-title"
                        className="mb-[16px] text-pc-body-lg font-semi-bold"
                    >
                        {title}
                    </h2>
                )}

                <div className="custom-scrollbar max-h-[70vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
