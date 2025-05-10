'use client'

import CloseSvg from '@/assets/svgs/close.svg'

import { Quiz } from '@/types/quiz'
import { Quizbook } from '@/types/quizbook'
import { QuizbookInfo } from '../../common'
import QuizList from './QuizList'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Sheet } from 'react-modal-sheet'

interface Props {
    quizbook: Quizbook<Quiz>
}

export default function ListAside({ quizbook }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () => {
        setIsOpen(false)
        router.replace(pathname)
    }

    return (
        <>
            <div
                onClick={handleClose}
                className="absolute inset-0 z-50 hidden cursor-pointer justify-end bg-gray-900/70 backdrop-blur-sm md:flex"
            >
                <aside
                    aria-label="문제 목록 사이드바"
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-w-[450px] max-w-[450px] cursor-default flex-col overflow-hidden rounded-bl-lg rounded-tl-lg bg-white"
                >
                    <div className="flex justify-between p-[16px]">
                        <h2 className="text-pc-body-lg font-semi-bold">
                            문제 목록
                        </h2>
                        <button onClick={handleClose}>
                            <CloseSvg className="size-6 shrink-0" />
                        </button>
                    </div>
                    <QuizbookInfo quizbook={quizbook} />
                    <QuizList
                        quizList={quizbook.quizList}
                        quizbookId={quizbook._id}
                    />
                </aside>
            </div>
            <Sheet
                className="md:hidden"
                isOpen={isOpen}
                onClose={handleClose}
                snapPoints={[0.8, 0.6, 0.4, 0.2]}
                initialSnap={1}
                dragVelocityThreshold={2000}
            >
                <Sheet.Container>
                    <Sheet.Header className="cursor-pointer" />
                    <Sheet.Content>
                        <div className="flex items-center justify-between p-[16px] pt-0">
                            <div className="size-6" />
                            <h2 className="text-mobile-body-lg font-semi-bold">
                                문제 목록
                            </h2>
                            <button onClick={handleClose}>
                                <CloseSvg className="size-6" />
                            </button>
                        </div>
                        <Sheet.Scroller>
                            <QuizList
                                quizList={quizbook.quizList}
                                quizbookId={quizbook._id}
                            />
                        </Sheet.Scroller>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop
                    onTap={handleClose}
                    className="!bg-gray-900/70 backdrop-blur-sm"
                />
            </Sheet>
        </>
    )
}
