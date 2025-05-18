'use client'

import clsx from 'clsx'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import StarHalfIcon from '@/assets/svgs/star-half.svg'
import StarEmptyIcon from '@/assets/svgs/star-empty.svg'
import OptionIcon from '@/assets/svgs/elipsis-v.svg'
import EditIcon from '@/assets/svgs/edit.svg'
import TrashIcon from '@/assets/svgs/trash.svg'
import Link from 'next/link'
import { ProfileImage } from '@/components'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
    _id: string
    score: number
    content: string
    author: { _id: string; nickname: string; profileImg: string }
    updatedAt: string
    myReview: boolean
}

export default function ReviewCard({
    _id,
    score,
    content,
    author,
    updatedAt,
    myReview,
}: Props) {
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false)
    const path = usePathname()

    const handleDropMenu = () => {
        setIsDropMenuOpen((prev) => !prev)
    }

    return (
        <article
            className={clsx(
                'flex w-full flex-col rounded-lg border-b-1 border-gray-200 p-4 text-mobile-body-md md:text-pc-body-md',
                myReview && 'bg-point-50',
            )}
        >
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                    <Link
                        href={`/user/${_id}`}
                        className="flex cursor-pointer items-center gap-2 md:gap-4"
                    >
                        <ProfileImage size={32} profileImg={``} />
                        <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                            {author.nickname}
                        </span>
                    </Link>
                    <span className="text-mobile-caption font-regular text-gray-400 md:text-pc-caption">
                        {updatedAt}
                    </span>
                </div>
                <div className="relative">
                    {myReview && (
                        <OptionIcon
                            className="size-5 cursor-pointer"
                            onClick={handleDropMenu}
                        />
                    )}
                    {isDropMenuOpen && (
                        <div className="absolute right-0 top-5 flex flex-col items-start gap-2 rounded-lg bg-white p-4 shadow-point md:gap-4">
                            <Link
                                href={`${path}/edit-review/${_id}`}
                                className="flex items-center gap-2 md:gap-4"
                            >
                                <EditIcon className="size-5" />
                                <span className="whitespace-nowrap text-mobile-body-md md:text-pc-body-md">
                                    수정
                                </span>
                            </Link>
                            <Link
                                href={`${path}/delete-review/${_id}`}
                                className="flex items-center gap-2 md:gap-4"
                            >
                                <TrashIcon className="size-5" />
                                <span className="whitespace-nowrap text-mobile-body-md md:text-pc-body-md">
                                    삭제
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-[10px] py-[2.5px]">
                <div className="flex">
                    {score === 0 ? (
                        <StarEmptyIcon className="size-5 text-[#FFCC00]" />
                    ) : score < 1 ? (
                        <StarHalfIcon className="size-5 text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-5 text-[#FFCC00]" />
                    )}
                    {score <= 1 ? (
                        <StarEmptyIcon className="size-5 text-[#FFCC00]" />
                    ) : score < 2 ? (
                        <StarHalfIcon className="size-5 text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-5 text-[#FFCC00]" />
                    )}
                    {score <= 2 ? (
                        <StarEmptyIcon className="size-5 text-[#FFCC00]" />
                    ) : score < 3 ? (
                        <StarHalfIcon className="size-5 text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-5 text-[#FFCC00]" />
                    )}
                    {score <= 3 ? (
                        <StarEmptyIcon className="size-5 text-[#FFCC00]" />
                    ) : score < 4 ? (
                        <StarHalfIcon className="size-5 text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-5 text-[#FFCC00]" />
                    )}
                    {score <= 4 ? (
                        <StarEmptyIcon className="size-5 text-[#FFCC00]" />
                    ) : score < 5 ? (
                        <StarHalfIcon className="size-5 text-[#FFCC00]" />
                    ) : (
                        <StarFullIcon className="size-5 text-[#FFCC00]" />
                    )}
                </div>
                <span className="font-semi-bold">{score}</span>
            </div>
            <p className="px-1 py-[10px] font-semi-bold">{content}</p>
        </article>
    )
}
