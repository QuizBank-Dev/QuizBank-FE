'use client'

import Link from 'next/link'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Categories } from '@/constants/common/category'
import SearchSvg from '@/assets/svgs/search.svg'

export default function SearchForm() {
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const keyword = formData.get('keyword')?.toString()
        const category = formData.get('category')?.toString()
        const sort = formData.get('sort')?.toString()

        // 검색
        console.log({
            keyword: keyword,
            category: category === 'ALL' ? undefined : category,
            sort: sort,
        })
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSearch}>
            <div className="relative">
                <input
                    id="keyword"
                    name="keyword"
                    className="input-solid input-mobile md:input-pc"
                    placeholder="풀고 싶은 퀴즈를 입력해주세요."
                />
                <button
                    type="submit"
                    className="absolute right-4 top-1/2 size-6 -translate-y-1/2"
                >
                    <SearchSvg />
                </button>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex gap-2">
                    <Select name="category" defaultValue="ALL">
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="카테고리" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ALL">전체</SelectItem>
                            {Categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select name="sort" defaultValue="latest">
                        <SelectTrigger className="mb-0 w-auto gap-[5px] rounded-lg border-2 border-gray-200 bg-white px-[15px] py-[7.5px] text-mobile-body-sm font-regular text-gray-900 md:gap-2 md:px-6 md:py-3 md:text-pc-body-md">
                            <SelectValue placeholder="정렬" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">최신순</SelectItem>
                            <SelectItem value="rating">인기순</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Link
                    href="/quizbook/post"
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                >
                    문제집 생성
                </Link>
            </div>
        </form>
    )
}
