'use client'

import { useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { QuizbookCard } from '@/components'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import { Quizbook } from '@/types/quizbook'

const quizbookList: Quizbook[] = [
    {
        _id: '67fdc5ac1e49a2871aeb6657',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '1',
            nickname: '나',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: false,
        isStudied: true,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6658',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '1',
            nickname: '나',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: false,
        isStudied: false,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6659',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 234,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '1',
            nickname: '나',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: true,
        isStudied: true,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6660',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 123,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '1',
            nickname: '나',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: true,
        isStudied: false,
    },
]

export default function QuizbookList() {
    const router = useRouter()

    return (
        <>
            <header className="flex items-center justify-between">
                <span className="text-mobile-body-lg md:text-pc-body-lg">
                    <span className="font-bold text-point-500">
                        {quizbookList.length}
                    </span>{' '}
                    퀴즈
                </span>
                <Select defaultValue="latest">
                    <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                        <SelectValue placeholder="정렬" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="latest">최신순</SelectItem>
                        <SelectItem value="rating">인기순</SelectItem>
                    </SelectContent>
                </Select>
            </header>
            <div className="flex flex-col gap-4">
                {quizbookList.map((quizbook) => (
                    <QuizbookCard
                        key={`my_${quizbook._id}`}
                        id={quizbook._id}
                        {...quizbook}
                        badge={{
                            status: quizbook.isStudied
                                ? QuizbookCardStatus.COMPLETED
                                : QuizbookCardStatus.BEFORE,
                        }}
                        onClick={() =>
                            router.push(`/quizbook/${quizbook._id}/info`)
                        }
                    >
                        <QuizbookCard.Description />
                        <div className="flex items-center gap-2">
                            <QuizbookCard.SolvedRate />
                            <QuizbookCard.ReviewRate />
                            <QuizbookCard.QuizCount />
                        </div>
                    </QuizbookCard>
                ))}
            </div>
        </>
    )
}
