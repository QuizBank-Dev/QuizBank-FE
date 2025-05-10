import CommentItem from './CommentItem'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface Props {
    commentList: {
        _id: string
        quiz: string
        content: string
        updatedAt: string
    }[]
}

export default function CommentList({ commentList }: Props) {
    return (
        <>
            <header className="flex items-center justify-between">
                <span className="text-mobile-body-lg md:text-pc-body-lg">
                    <span className="font-bold text-point-500">{5}</span>개
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
                {commentList.map((comment) => (
                    <CommentItem key={comment._id} {...comment} />
                ))}
            </div>
        </>
    )
}
