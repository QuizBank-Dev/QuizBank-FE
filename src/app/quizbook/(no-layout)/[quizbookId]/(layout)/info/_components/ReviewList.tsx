'use client'

import StarFullIcon from '@/assets/svgs/star-full.svg'
import StarHalfIcon from '@/assets/svgs/star-half.svg'
import StarEmptyIcon from '@/assets/svgs/star-empty.svg'
import ReviewCard from './ReviewCard'

const reviewList = [
    {
        _id: '67fe3c0c277a68a1ac3f4aa4',
        score: 2.5,
        content: '쏘쏘',
        quizbook: '67fdc5ac1e49a2871aeb6657',
        author: {
            _id: '67fe18f8bb486fc72e9a8004',
            nickname: '쭈니0',
            profileImg: '',
        },
        createdAt: '2025-04-15T10:59:24.969Z',
        updatedAt: '2025-04-15T10:59:24.969Z',
        __v: 0,
    },
    {
        _id: '67fdc64a1e49a2871aeb668d',
        score: 4,
        content: '좋아용',
        quizbook: '67fdc5ac1e49a2871aeb6657',
        author: {
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: '쭈니1',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:36:58.467Z',
        updatedAt: '2025-04-15T02:36:58.467Z',
        __v: 0,
    },
    {
        _id: '67fdc64a1e49a2871aeb6688',
        score: 0,
        content: '싫어용',
        quizbook: '67fdc5ac1e49a2871aeb6657',
        author: {
            _id: '67e2e20e5872c849d5dd4b87',
            nickname: '쭈니2',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:36:58.467Z',
        updatedAt: '2025-04-15T02:36:58.467Z',
        __v: 0,
    },
]

export default function ReviewList() {
    // 추후 데이터 패칭 추가
    const averageScore = 0

    return (
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 font-semi-bold shadow-point md:p-8">
            <div className="flex flex-col items-center gap-[10px] rounded-lg border-1 border-gray-200 p-4">
                <span className="text-mobile-title-lg md:text-pc-title-lg">
                    {averageScore}
                </span>
                <div className="flex">
                    {averageScore === 0 ? (
                        <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                    ) : averageScore < 1 ? (
                        <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                    )}
                    {averageScore <= 1 ? (
                        <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                    ) : averageScore < 2 ? (
                        <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                    )}
                    {averageScore <= 2 ? (
                        <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                    ) : averageScore < 3 ? (
                        <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                    )}
                    {averageScore <= 3 ? (
                        <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                    ) : averageScore < 4 ? (
                        <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                    )}
                    {averageScore <= 4 ? (
                        <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                    ) : averageScore < 5 ? (
                        <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                    )}
                </div>
                <span className="text-mobile-body-lg text-gray-500 md:text-pc-body-lg">
                    {56}개의 후기
                </span>
            </div>
            {reviewList.map((data) => (
                <ReviewCard
                    key={data._id}
                    _id={data._id}
                    score={data.score}
                    content={data.content}
                    author={data.author}
                    updatedAt={data.updatedAt}
                    myReview={data._id === '67fe3c0c277a68a1ac3f4aa4'}
                />
            ))}
            <button className="btn-solid btn-mobile-lg w-full md:btn-pc-lg">
                더보기
            </button>
        </div>
    )
}
