'use client'

import CloseSvg from '@/assets/svgs/close.svg'
import LeftArrowSvg from '@/assets/svgs/left-arrow.svg'

import { Quiz } from '@/types/quiz'
import { Quizbook } from '@/types/quizbook'
import { QuizbookInfo } from '../../common'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sheet } from 'react-modal-sheet'
import CommentInput from './CommentInput'
import CommentInputPortal from './CommentInputPortal'
import { getQuestionStore } from '@/store/quizbook'
import { Comment } from '@/types/comment'
import CommentList from './CommentList'
import CommentDetail from './CommentDetail'

export const commentData = Array.from({ length: 20 }, (_, i) => ({
    _id: `cmt${i + 1}`,
    content: `이 문제에 대한 제 생각은 이렇습니다. ${
        i % 2 === 0
            ? '로직 흐름을 천천히 따라가면서 문제를 분석해보니 생각보다 간단했지만, 조건을 잘못 이해하면 충분히 틀릴 수 있는 유형입니다.'
            : '개념 자체는 익숙했지만 보기 구성이 헷갈려서 정답을 찾는 데 시간이 걸렸습니다. 다음부터는 꼼꼼히 읽어야 할 것 같아요.'
    } 그리고 이런 문제는 자주 반복해서 푸는 게 좋은 것 같아요. 감사합니다!`,
    quiz: 'quiz123',
    author: {
        _id: `user${(i % 5) + 1}`,
        nickname: [
            '코딩고수',
            'JS마스터',
            '초보개발자',
            '피드백요정',
            '감사합니다',
        ][i % 5],
        profileImg: `/images/profile/user${(i % 5) + 1}.png`,
    },
    createdAt: `2025-05-09T10:${(i + 1).toString().padStart(2, '0')}:00.000Z`,
    updatedAt: `2025-05-09T10:${(i + 1).toString().padStart(2, '0')}:00.000Z`,
    recommentCount: [6, 0, 5, 3, 4][i % 5],
}))

interface Props {
    quizbook: Quizbook<Quiz>
}

export default function CommentAside({ quizbook }: Props) {
    const router = useRouter()
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)
    const [mode, setMode] = useState<'list' | 'detail'>('list')
    const [selectedComment, setSelectedComment] = useState<Comment | null>(null)

    const questionStore = getQuestionStore(quizbook._id)
    const curIdx = questionStore((s) => s.curIdx)
    const curQuiz = quizbook.quizList[curIdx - 1]

    const handleClose = () => {
        setIsOpen(false)
        router.replace(pathname)
    }
    const handleClickRecomment = (comment: Comment) => {
        setSelectedComment(comment)
        setMode('detail')
    }
    const handleBack = () => {
        setSelectedComment(null)
        setMode('list')
    }

    // TODO 댓글 조회 로직

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <>
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

                    {/* 문제집 정보 영역 */}
                    {mode === 'list' && <QuizbookInfo quizbook={quizbook} />}

                    {/* 댓글 영역 */}
                    {mode === 'list' && (
                        <CommentList
                            commentList={commentData}
                            onClickRecomment={handleClickRecomment}
                        />
                    )}

                    {mode === 'detail' && selectedComment && (
                        <CommentDetail selectedComment={selectedComment} />
                    )}

                    <CommentInput
                        quizId={curQuiz._id}
                        commentId={selectedComment?._id}
                    />
                </aside>
            </div>

            {/* 모바일 바텀시트 */}
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
                        <Sheet.Scroller className="no-scrollbar flex-1">
                            {mode === 'list' && (
                                <CommentList
                                    commentList={commentData}
                                    onClickRecomment={handleClickRecomment}
                                />
                            )}
                            {mode === 'detail' && selectedComment && (
                                <CommentDetail
                                    selectedComment={selectedComment}
                                />
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
        </>
    )
}
