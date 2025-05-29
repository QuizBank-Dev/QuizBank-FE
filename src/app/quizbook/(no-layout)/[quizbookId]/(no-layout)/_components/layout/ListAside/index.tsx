'use client'

import CloseSvg from '@/assets/svgs/close.svg'

import { QuizbookMeta } from '@/types/quizbook'
import { QuizbookInfo } from '../../common'
import QuizList from './QuizList'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { Sheet } from 'react-modal-sheet'
import { LoopAnimation } from '@/components'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function ListAside({ quizbookMeta }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
        router.replace(pathname)
    }

    // 새로 고침시 Hydration mismatch 오류 방지(컴포넌트 마운트 후 Open)
    useEffect(() => {
        setIsOpen(true)
    }, [])

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
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center p-[16] md:p-[32px]">
                                <div className="size-8 animate-spin">
                                    <LoopAnimation />
                                </div>
                            </div>
                        }
                    >
                        <QuizbookInfo quizbookMeta={quizbookMeta} />
                    </Suspense>
                    <QuizList
                        quizList={quizbookMeta.quizList}
                        quizbookId={quizbookMeta._id}
                    />
                </aside>
            </div>
            <Sheet
                className="md:hidden"
                isOpen={isOpen}
                onClose={handleClose}
                snapPoints={[1, 0.8, 0.6, 0.4, 0.2]}
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
                        <Sheet.Scroller className="no-scrollbar">
                            <QuizList
                                quizList={quizbookMeta.quizList}
                                quizbookId={quizbookMeta._id}
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
