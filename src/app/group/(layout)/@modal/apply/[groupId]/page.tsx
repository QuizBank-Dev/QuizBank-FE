'use client'

import { LoopAnimation, Modal } from '@/components'
import { patchApply } from '@/lib/api/group'
import clsx from 'clsx'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ApplyGroupModal() {
    const [isLoading, setIsLoading] = useState(false)
    const { groupId } = useParams()
    const router = useRouter()

    const handleClick = async () => {
        setIsLoading(true)
        await patchApply(groupId as string)
            .then(() => {
                toast('가입 신청이 완료되었습니다!')
                router.push(`/group`)
            })
            .catch((error) => {
                setIsLoading(false)
                toast(error.response.data.message)
            })
    }

    return (
        <Modal title="가입 신청" closeOnOverlayClick={true} isFullWith={false}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>해당 그룹에 가입을</span>
                    <span>신청하시겠습니까?</span>
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
                    {isLoading ? 'Loading...' : '신청'}
                </button>
            </div>
        </Modal>
    )
}
