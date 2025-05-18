'use client'

import { LoopAnimation, Modal } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'

export default function DeleteReviewModal() {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log(1)
            setIsLoading(false)
        }, 2000)
    }

    return (
        <Modal title="후기 삭제" closeOnOverlayClick={true} isFullWith={false}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>정말로, 소중하신 후기를</span>
                    <span>삭제하시겠습니까?</span>
                </div>
                <button
                    disabled={isLoading}
                    className={clsx(
                        'btn-solid btn-mobile-md bg-danger-300 md:btn-pc-md',
                        isLoading && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {isLoading && <LoopAnimation />}
                    {isLoading ? 'Loading...' : '삭제'}
                </button>
            </div>
        </Modal>
    )
}
