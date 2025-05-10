import { Quiz } from '@/types/quiz'
import { SolutionUI } from '../_components/ui'
import { Quizbook } from '@/types/quizbook'

export const quizbookData: Quizbook<Quiz> = {
    _id: '67fdc5ac1e49a2871aeb6657',
    title: '면접 대비 CS 문제집',
    description:
        '면접 대비하는 문제입니다. 면접 대비하는 문제입니다. 면접 대비하는 문제입니다. 면접 대비하는 문제입니다.',
    category: '웹 개발',
    quizList: Array.from({ length: 20 }, (_, i) => ({
        _id: `quiz${i + 1}`,
        type:
            i % 4 === 0
                ? 'ox'
                : i % 4 === 1
                  ? '객관식'
                  : i % 4 === 2
                    ? '주관식'
                    : '서술형',
        question: `질문 ${i + 1}입니다.\n`.repeat(i % 4 === 1 ? 10 : 2), // 객관식은 줄바꿈 테스트 포함
        optionList:
            i % 4 === 1 ? ['보기1', '보기2', '보기3', '보기4'] : undefined,
        answer: i % 4 === 0 ? 'o' : i % 4 === 1 ? '보기1' : `정답 ${i + 1}`,
    })),
    solvedCount: 3,
    solvedScore: 40,
    reviewCount: 1,
    reviewScore: 4,
    reviewRating: 4,
    author: {
        _id: '67e2e20e5872c849d5dd4b86',
        nickname: 'test계정',
        profileImg: '',
    },
    createdAt: '2025-04-15T02:34:20.113Z',
    updatedAt: '2025-04-15T08:24:44.912Z',
    isLiked: false,
    isStudied: true,
}

interface Props {
    params: Promise<{ quizbookId: string }>
}

export default async function Page({ params }: Props) {
    const { quizbookId } = await params
    return (
        <div className="flex h-full flex-1 flex-col bg-white">
            <SolutionUI quizbook={quizbookData} />
        </div>
    )
}
