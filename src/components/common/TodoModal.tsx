'use client'

import { useRouter } from 'next/navigation'
import { Modal } from '@/components'

export const TodoModal = () => {
    const router = useRouter()

    return (
        <Modal
            className="flex flex-col items-center gap-4"
            title="앗, 이런!"
            isFullWith={false}
        >
            <span className="text-mobile-title-lg md:text-pc-title-lg">😢</span>
            <p className="text-center text-mobile-body-md md:text-pc-body-md">
                현재 해당 기능이 구현되지 않았으며 이후 추가 예정입니다.
            </p>
            <button
                className="btn-solid btn-mobile-sm md:btn-pc-sm"
                onClick={router.back}
            >
                뒤로가기
            </button>
        </Modal>
    )
}
