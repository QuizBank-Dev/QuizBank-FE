'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Categories } from '@/constants/common/category'
import { QuizbookListParams } from '@/types/api/quizbook'
import SearchSvg from '@/assets/svgs/search.svg'

interface Props {
    params: Pick<QuizbookListParams, 'sort' | 'category' | 'keyword'>
}

export default function SearchForm({ params }: Props) {
    const router = useRouter()

    const handleSetParams = (name: string, value?: string) => {
        const searchParams = new URLSearchParams({ ...params, [name]: value })
        if (!value) {
            searchParams.delete(name)
        }
        router.replace(`/quizbook?${searchParams}`)
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const keyword = formData.get('keyword')?.toString()

        handleSetParams('keyword', keyword)
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSearch}>
            <div className="relative">
                <input
                    id="keyword"
                    name="keyword"
                    className="input-solid input-mobile md:input-pc"
                    placeholder="풀고 싶은 퀴즈를 입력해주세요."
                    defaultValue={params.keyword || ''}
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
                    <Select
                        name="category"
                        defaultValue={params.category || 'ALL'}
                        onValueChange={(value) =>
                            handleSetParams(
                                'category',
                                value === 'ALL' ? '' : value,
                            )
                        }
                    >
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
                    <Select
                        name="sort"
                        defaultValue={params.sort || 'latest'}
                        onValueChange={(value) =>
                            handleSetParams('sort', value)
                        }
                    >
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
