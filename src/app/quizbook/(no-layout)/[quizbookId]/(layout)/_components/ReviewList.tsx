'use client'

import StarFullIcon from '@/assets/svgs/star-full.svg'
import StarHalfIcon from '@/assets/svgs/star-half.svg'
import StarEmptyIcon from '@/assets/svgs/star-empty.svg'

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
            <button className="btn-solid btn-mobile-lg w-full md:btn-pc-lg">
                더보기
            </button>
        </div>
    )
}
