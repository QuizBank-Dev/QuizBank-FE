'use client'

import { LoopAnimation, Modal } from '@/components'
import { useDeleteGroup } from '@/hooks/mutations/group'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function DeleteGroupModal() {
    const [loading, setLoading] = useState(false)
    const { groupId } = useParams()
    const { mutate } = useDeleteGroup(groupId as string, () => {
        setLoading(false)
    })

    const handleClick = () => {
        setLoading(true)
        mutate()
    }

    return (
        <Modal title="그룹 삭제" closeOnOverlayClick={true} isFullWith={false}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>해당 그룹을 삭제하시겠습니까?</span>
                    <span>한번 삭제하면</span>
                    <span className="text-danger-300">복구할 수 없습니다!</span>
                </div>
                <button
                    disabled={loading}
                    className={clsx(
                        'btn-solid btn-mobile-md bg-danger-300 md:btn-pc-md',
                        loading && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {loading && <LoopAnimation />}
                    {loading ? 'Loading...' : '삭제'}
                </button>
            </div>
        </Modal>
    )
}
