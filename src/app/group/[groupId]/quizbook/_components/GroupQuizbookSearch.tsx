'use client'

import { QuizbookCard } from '@/components'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { QuizbookCardStatus } from '@/constants/common/quizbookBadge'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import RightArrowIcon from '@/assets/svgs/right-arrow.svg'

const dummyDatas = [
    {
        group: '65e8a5d6fc13ae5e7f000002',
        quizbook: {
            _id: '65e8a5d6fc13ae5e7f000001',
            title: '알고리즘 문제집',
            description: '면접 준비용',
            category: '알고리즘',
            author: {
                _id: '유저ID',
                nickname: '유저 닉네임',
                profileImg: '',
            },
            solvedCount: 100,
            solvedRate: 85.5,
        },
        endedAt: '2025-04-02',
    },
    {
        group: '65e8a5d6fc13ae5e7f000002',
        quizbook: {
            _id: '65e8a5d6fc13ae5e7f000002',
            title: '알고리즘 문제집',
            description: '면접 준비용',
            category: '알고리즘',
            author: {
                _id: '유저ID',
                nickname: '유저 닉네임',
                profileImg: '',
            },
            solvedCount: 100,
            solvedRate: 85.5,
        },
        endedAt: '2025-04-02',
    },
]

export default function GroupQuizbookSearch({ groupId }: { groupId: string }) {
    const router = useRouter()

    const handleQuizbookCardClick = () => {
        console.log(1)
    }

    return (
        <section className="flex flex-col gap-4 md:mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Select defaultValue="in-progress">
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in-progress">진행중</SelectItem>
                            <SelectItem value="complete">마감 완료</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                        {'1,026'}개의 결과
                    </div>
                </div>
                <button
                    className="btn-solid btn-mobile-sm md:btn-pc-md"
                    onClick={() => router.push('/quizbook')}
                >
                    문제집 추가
                </button>
            </div>
            {dummyDatas.map((data) => (
                <QuizbookCard
                    key={data.quizbook._id}
                    id={data.quizbook._id}
                    category={data.quizbook.category}
                    title={data.quizbook.title}
                    description={data.quizbook.description}
                    author={{
                        nickname: data.quizbook.author.nickname,
                        profileImg: data.quizbook.author.profileImg,
                    }}
                    solvedRate={78.5}
                    solvedCount={36}
                    badge={{
                        status: QuizbookCardStatus.COMPLETED,
                        customText: '완료',
                    }}
                    onClick={handleQuizbookCardClick}
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
                        <QuizbookCard.SolvedRate />
                        <Link
                            href={`/group/${groupId}/quizbook/${data.quizbook._id}`}
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
