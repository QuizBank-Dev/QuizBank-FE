'use client'

import { Quizbook } from '@/types/quizbook'
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

export default function QuizbookList() {
    const router = useRouter()
    const quizbookList: Quizbook[] = [
        {
            _id: '1',
            title: '네트워크 마스터를 위한 OX 퀴즈',
            category: '네트워크',
            description:
                '네트워크 기초부터 HTTP와 HTTPS의 차이를 학습할 수 있는 문제집입니다.',
            solvedCount: 300,
            solvedRate: 75,
            author: {
                nickname: '나',
                profileImg: '',
            },
            quizList: Array.from({ length: 10 }),
            reviewRate: 4.3,
            reviewCount: 100,
            isStudied: true,
            isLiked: true,
        },
        {
            _id: '2',
            title: '네트워크 마스터를 위한 OX 퀴즈',
            category: '네트워크',
            description:
                '네트워크 기초부터 HTTP와 HTTPS의 차이를 학습할 수 있는 문제집입니다.',
            solvedCount: 300,
            solvedRate: 75,
            author: {
                nickname: '나',
                profileImg: '',
            },
            quizList: Array.from({ length: 10 }),
            reviewRate: 4.3,
            reviewCount: 100,
            isStudied: false,
            isLiked: true,
        },
        {
            _id: '3',
            title: '네트워크 마스터를 위한 OX 퀴즈',
            category: '네트워크',
            description:
                '네트워크 기초부터 HTTP와 HTTPS의 차이를 학습할 수 있는 문제집입니다.',
            solvedCount: 300,
            solvedRate: 75,
            author: {
                nickname: '나',
                profileImg: '',
            },
            quizList: Array.from({ length: 10 }),
            reviewRate: 4.3,
            reviewCount: 100,
            isStudied: true,
            isLiked: true,
        },
    ]
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
                        onClick={() => router.push(`/quizbook/${quizbook._id}`)}
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
