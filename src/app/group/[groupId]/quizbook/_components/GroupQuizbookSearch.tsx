'use client'

import { QuizbookCard as Card, QuizbookCard } from '@/components'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import Link from 'next/link'
import RightArrowIcon from '@/assets/svgs/right-arrow.svg'
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
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
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
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
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
        isLiked: true,
        isStudied: false,
    },
]

export default function GroupQuizbookSearch({ groupId }: { groupId: string }) {
    const handleQuizbookCardClick = () => {
        console.log(1)
    }

    return (
        <section className="flex flex-col gap-4 md:mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Select defaultValue="in-progress">
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in-progress">진행중</SelectItem>
                            <SelectItem value="complete">마감 완료</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="recent">
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recent">등록순</SelectItem>
                            <SelectItem value="end-date">마감일순</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Link
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                    href={`/quizbook`}
                >
                    문제집 선정
                </Link>
            </div>

            <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                <span className="text-point-500">{'1,026'}</span>개의 결과
            </div>

            {quizbookList.map((quizbook) => (
                <QuizbookCard
                    key={quizbook._id}
                    id={quizbook._id}
                    {...quizbook}
                    badge={{
                        status: quizbook.isStudied
                            ? QuizbookCardStatus.COMPLETED
                            : QuizbookCardStatus.BEFORE,
                    }}
                    onClick={() => {}}
                >
                    <QuizbookCard.Description />
                    <div className="flex w-full items-end justify-between">
                        <QuizbookCard.Author />
                        <div className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                            마감일:{' '}
                            <span className="text-mobile-body-sm font-semi-bold text-point-500 md:text-pc-body-sm">
                                {'2025-03-28'}
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full items-end justify-between">
                        <div className="flex gap-2">
                            <QuizbookCard.SolvedRate />
                            <QuizbookCard.ReviewRate />
                            <QuizbookCard.QuizCount />
                        </div>
                        <Link
                            href={`/group/${groupId}/quizbook/${quizbook._id}`}
                            className="flex cursor-pointer items-center gap-1 text-point-500"
                        >
                            <span className="text-mobile-body-sm font-semi-bold md:text-pc-body-sm">
                                문제집 활동 상세
                            </span>
                            <RightArrowIcon className="size-5 md:size-6" />
                        </Link>
                    </div>
                </QuizbookCard>
            ))}
        </section>
    )
}
