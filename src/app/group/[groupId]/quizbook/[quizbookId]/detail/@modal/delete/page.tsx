'use client'

import { LoopAnimation, Modal } from '@/components'
import { useDeleteGroupQuizbook } from '@/hooks/mutations/group-quizbook'
import clsx from 'clsx'
import { useParams } from 'next/navigation'

export default function DeleteGroupQuizbookModal() {
    const { groupId, quizbookId } = useParams()
    const { mutate, isPending } = useDeleteGroupQuizbook(
        groupId as string,
        quizbookId as string,
    )

    const handleClick = () => {
        mutate()
    }

    return (
        <Modal
            title="문제집 선정 해제"
            closeOnOverlayClick={true}
            isFullWith={false}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>해당 문제집 선정을</span>
                    <span>그룹에서 해제하시겠습니까?</span>
                </div>
                <button
                    disabled={isPending}
                    className={clsx(
                        'btn-solid btn-mobile-md bg-danger-300 md:btn-pc-md',
                        isPending && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {isPending && <LoopAnimation />}
                    {isPending ? 'Loading...' : '해제'}
                </button>
            </div>
        </Modal>
    )
}
