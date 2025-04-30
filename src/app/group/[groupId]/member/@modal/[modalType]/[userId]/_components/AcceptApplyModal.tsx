'use client'

import { LoopAnimation, Modal } from '@/components'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function AcceptApplyModal() {
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    const handleClick = () => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log(1)
            setIsLoading(false)
        }, 2000)
    }

    return (
        <Modal
            title="가입 신청 수락"
            closeOnOverlayClick={true}
            isFullWith={false}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>해당 가입 신청을</span>
                    <span>수락하시겠습니까?</span>
                </div>
                <button
                    disabled={isLoading}
                    className={clsx(
                        'btn-solid btn-mobile-md md:btn-pc-md',
                        isLoading && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {isLoading && <LoopAnimation />}
                    {isLoading ? 'Loading...' : '수락'}
                </button>
            </div>
        </Modal>
    )
}
