'use client'

import { Comment } from '@/types/comment'
import CommentItem from './CommentItem'
import CommentList from './CommentList'

export const recommentData = Array.from({ length: 20 }, (_, i) => ({
    _id: `recomment${i + 1}`,
    parent: `cmt${(i % 5) + 1}`, // cmt1 ~ cmt5 중 하나에 속함
    content: `대댓글 테스트입니다 ${i + 1}번째. 이 문제를 풀면서 정말 많은 생각이 들었어요. ${
        i % 2 === 0
            ? '이런 유형은 실전에서 자주 마주치는데, 자주 틀리기 쉬워요.'
            : '꼼꼼히 조건을 읽지 않으면 실수할 수 있는 부분이라 다시 복습했어요.'
    }`,
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
    createdAt: `2025-05-09T11:${(i + 1).toString().padStart(2, '0')}:00.000Z`,
    updatedAt: `2025-05-09T11:${(i + 1).toString().padStart(2, '0')}:00.000Z`,
    __v: 0,
}))

interface Props {
    selectedComment: Comment
}

export default function CommentDetail({ selectedComment }: Props) {
    // TODO: Recomment 조회 로직

    return (
        <>
            <article>
                <CommentItem isTopComment={true} comment={selectedComment} />
            </article>
            <CommentList className="pl-[32px]" commentList={recommentData} />
        </>
    )
}
