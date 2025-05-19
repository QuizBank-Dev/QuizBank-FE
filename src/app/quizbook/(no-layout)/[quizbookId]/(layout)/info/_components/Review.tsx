'use client'

import Link from 'next/link'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import StarHalfIcon from '@/assets/svgs/star-half.svg'
import StarEmptyIcon from '@/assets/svgs/star-empty.svg'
import ReviewCard from './ReviewCard'
import { useQuizbookStatesQuery } from '@/hooks/queries/quizbook'
import { useReviewListQuery } from '@/hooks/queries/review'
import { useCurrentUser } from '@/hooks/queries/user'

export default function Review({ quizbookId }: { quizbookId: string }) {
    const { data: statesData } = useQuizbookStatesQuery(quizbookId)
    const {
        data: reviewsData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useReviewListQuery(quizbookId)
    const { data: userData } = useCurrentUser()

    const list = reviewsData?.pages.flatMap((page) => page.data) ?? []

    return (
        <section className="flex w-full flex-col gap-4 font-semi-bold">
            <h2 className="text-mobile-body-lg md:text-pc-body-lg">
                문제집 후기
            </h2>
            {userData &&
                reviewsData &&
                (list.length === 0 || list[0].author._id !== userData._id) && (
                    <div className="flex w-full items-start gap-4 rounded-lg bg-[#FFF9DB] p-4">
                        <div className="flex flex-1 gap-2 md:gap-4">
                            <StarFullIcon className="size-5 text-[#FFCC00] md:size-6" />
                            <div className="flex flex-1 flex-col gap-2">
                                <span className="text-mobile-body-lg md:text-pc-body-lg">
                                    후기를 남겨주세요!
                                </span>
                                <p className="text-mobile-body-md font-regular text-gray-600 md:text-pc-body-md">
                                    여러분의 소중한 후기가 다른 학습자들에게 큰
                                    도움이 됩니다. 간단한 후기를 남겨주세요.
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/quizbook/${quizbookId}/info/create-review`}
                            className="btn-solid btn-mobile-md md:btn-pc-md"
                        >
                            후기 남기기
                        </Link>
                    </div>
                )}
            <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 font-semi-bold shadow-point md:p-8">
                <div className="flex flex-col items-center gap-[10px] rounded-lg border-1 border-gray-200 p-4">
                    <span className="text-mobile-title-lg md:text-pc-title-lg">
                        {statesData ? statesData.reviewRating : '--'}
                    </span>
                    <div className="flex">
                        {!statesData || statesData.reviewRating === 0 ? (
                            <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                        ) : statesData.reviewRating < 1 ? (
                            <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                        ) : (
                            <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                        )}
                        {!statesData || statesData.reviewRating <= 1 ? (
                            <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                        ) : statesData.reviewRating < 2 ? (
                            <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                        ) : (
                            <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                        )}
                        {!statesData || statesData.reviewRating <= 2 ? (
                            <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                        ) : statesData.reviewRating < 3 ? (
                            <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                        ) : (
                            <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                        )}
                        {!statesData || statesData.reviewRating <= 3 ? (
                            <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                        ) : statesData.reviewRating < 4 ? (
                            <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                        ) : (
                            <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                        )}
                        {!statesData || statesData.reviewRating <= 4 ? (
                            <StarEmptyIcon className="size-[37px] text-[#FFCC00]" />
                        ) : statesData.reviewRating < 5 ? (
                            <StarHalfIcon className="size-[37px] text-[#FFCC00]" />
                        ) : (
                            <StarFullIcon className="size-[37px] text-[#FFCC00]" />
                        )}
                    </div>
                    <span className="text-mobile-body-lg text-gray-500 md:text-pc-body-lg">
                        {statesData
                            ? statesData.reviewCount.toLocaleString('en-US')
                            : '--'}
                        개의 후기
                    </span>
                </div>
                {list.map((data) => (
                    <ReviewCard
                        key={data._id}
                        _id={data._id}
                        score={data.score}
                        content={data.content}
                        author={data.author}
                        createdAt={data.createdAt}
                        myReview={data.author._id === userData?._id}
                    />
                ))}
                <button
                    disabled={!hasNextPage || isFetchingNextPage}
                    className="btn-solid btn-mobile-lg w-full md:btn-pc-lg"
                    onClick={() => fetchNextPage()}
                >
                    {hasNextPage ? '더보기' : '더 이상 불러올 리뷰가 없어요.'}
                </button>
            </div>
        </section>
    )
}
