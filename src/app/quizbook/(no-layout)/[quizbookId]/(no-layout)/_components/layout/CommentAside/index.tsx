'use client'

import CloseSvg from '@/assets/svgs/close.svg'
import LeftArrowSvg from '@/assets/svgs/left-arrow.svg'

import { QuizbookMeta } from '@/types/quizbook'
import { QuizbookInfo } from '../../common'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from 'react'
import CommentInput from './CommentInput'
import { getQuestionStore } from '@/store/quizbook'
import { Comment } from '@/types/comment'
import CommentListView from './CommentListView'
import RecommentListView from './RecommentListView'
import CommentItem from './CommentItem'
import { Sheet } from 'react-modal-sheet'
import CommentInputPortal from './CommentInputPortal'
import { LoopAnimation } from '@/components'
import CommentAsideContext from './CommentAsideContext'
import CommentEditInput from './CommentEditInput'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function CommentAside({ quizbookMeta }: Props) {
    const router = useRouter()
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)
    const [mode, setMode] = useState<'list' | 'detail'>('list')
    const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
    const [editTarget, setEditTarget] = useState<Comment | null>(null)

    const desktopRef = useRef<HTMLDivElement | null>(null)
    const mobileRef = useRef<HTMLDivElement | null>(null)

    const questionStore = getQuestionStore(quizbookMeta._id)
    const curIdx = questionStore((s) => s.curIdx)
    const curQuiz = quizbookMeta.quizList[curIdx - 1]

    const handleClose = () => {
        setIsOpen(false)
        router.replace(pathname)
    }
    const handleClickRecomment = (comment: Comment) => {
        setSelectedComment(comment)
        setMode('detail')
        setEditTarget(null)
    }
    const handleBack = () => {
        setSelectedComment(null)
        setMode('list')
        setEditTarget(null)
    }

    // 새로 고침시 Hydration mismatch 오류 방지(컴포넌트 마운트 후 Open)
    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <CommentAsideContext.Provider
            value={{
                editTarget,
                setEditTarget,
                selectedComment,
                setSelectedComment,
                setMode,
            }}
        >
            {/* 데스크탑 사이드바 */}
            <div
                onClick={handleClose}
                className="absolute inset-0 z-50 hidden cursor-pointer justify-end bg-gray-900 bg-opacity-70 backdrop-blur-sm md:flex"
            >
                <aside
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-w-[450px] max-w-[450px] cursor-default flex-col overflow-hidden rounded-bl-lg rounded-tl-lg bg-white"
                >
                    {/* 타이틀 영역 */}
                    <div className="flex justify-between p-[16px]">
                        {mode === 'detail' && (
                            <button onClick={handleBack}>
                                <LeftArrowSvg className="size-6 shrink-0" />
                            </button>
                        )}
                        {mode === 'list' && (
                            <h2 className="text-pc-body-lg font-semi-bold">
                                댓글
                            </h2>
                        )}
                        <button onClick={handleClose}>
                            <CloseSvg className="size-6 shrink-0" />
                        </button>
                    </div>

                    <div className="relative flex flex-1 flex-col overflow-hidden">
                        {/* 상위 댓글 */}
                        {mode === 'list' && (
                            <>
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
                                <div
                                    className="flex-1 overflow-y-auto"
                                    ref={desktopRef}
                                >
                                    <CommentListView
                                        ref={desktopRef}
                                        onClickRecomment={handleClickRecomment}
                                        quiz={curQuiz}
                                    />
                                </div>
                            </>
                        )}

                        {/* 대댓글 */}
                        {mode === 'detail' && selectedComment && (
                            <>
                                <div
                                    className="flex-1 overflow-y-auto"
                                    ref={desktopRef}
                                >
                                    <CommentItem
                                        isTopComment={true}
                                        comment={selectedComment}
                                    />
                                    <RecommentListView
                                        ref={desktopRef}
                                        comment={selectedComment}
                                    />
                                </div>
                            </>
                        )}

                        <CommentInput
                            quizId={curQuiz._id}
                            commentId={selectedComment?._id}
                        />

                        {editTarget && <CommentEditInput />}
                    </div>
                </aside>
            </div>

            {/* 모바일 바텀시트 */}
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
                        {/* 타이틀 영역 */}
                        <div className="flex items-center justify-between p-[16px] pt-0">
                            {mode === 'detail' ? (
                                <button onClick={handleBack}>
                                    <LeftArrowSvg className="size-6 shrink-0" />
                                </button>
                            ) : (
                                <div className="size-6" />
                            )}
                            {mode === 'list' && (
                                <h2 className="text-mobile-body-lg font-semi-bold">
                                    댓글
                                </h2>
                            )}
                            <button onClick={handleClose}>
                                <CloseSvg className="size-6" />
                            </button>
                        </div>

                        {/* 댓글 영역 */}
                        <Sheet.Scroller
                            className="no-scrollbar"
                            ref={mobileRef}
                        >
                            {/* 상위 댓글 */}
                            {mode === 'list' && (
                                <CommentListView
                                    ref={mobileRef}
                                    quiz={curQuiz}
                                    onClickRecomment={handleClickRecomment}
                                />
                            )}
                            {mode === 'detail' && selectedComment && (
                                <>
                                    <CommentItem
                                        isTopComment={true}
                                        comment={selectedComment}
                                    />
                                    <RecommentListView
                                        ref={mobileRef}
                                        comment={selectedComment}
                                    />
                                </>
                            )}
                        </Sheet.Scroller>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop
                    onTap={handleClose}
                    className="!bg-gray-900 !bg-opacity-70 backdrop-blur-sm"
                />
            </Sheet>
            {isOpen && (
                <CommentInputPortal
                    quizId={curQuiz._id}
                    commentId={selectedComment?._id}
                />
            )}
        </CommentAsideContext.Provider>
    )
}
