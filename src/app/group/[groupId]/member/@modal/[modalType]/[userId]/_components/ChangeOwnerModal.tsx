'use client'

import { LoopAnimation, Modal } from '@/components'
import { usePatchOwner } from '@/hooks/mutations'
import clsx from 'clsx'
import { useParams } from 'next/navigation'

export default function ChangeOwnerModal() {
    const { groupId, userId } = useParams()
    const { mutate, isPending } = usePatchOwner(groupId as string)

    const handleClick = () => {
        mutate(userId as string)
    }

    return (
        <Modal
            title="그룹장 위임"
            closeOnOverlayClick={true}
            isFullWith={false}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>그룹장 역할을</span>
                    <span>위임하시겠습니까?</span>
                </div>
                <button
                    disabled={isPending}
                    className={clsx(
                        'btn-solid btn-mobile-md md:btn-pc-md',
                        isPending && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {isPending && <LoopAnimation />}
                    {isPending ? 'Loading...' : '위임'}
                </button>
            </div>
        </Modal>
    )
}
