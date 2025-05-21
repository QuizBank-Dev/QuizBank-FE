import Link from 'next/link'
import { getRelativeTime } from '@/utils/date/formatter'

interface Props {
    _id: string // comment id
    quiz: string // quiz id
    content: string
    updatedAt: string
}

export default function CommentItem({ _id, quiz, content, updatedAt }: Props) {
    return (
        <div className="rounded-lg bg-white p-4 shadow-point hover:bg-gray-100">
            <p className="line-clamp-3">{content}</p>
            <div className="mt-2 flex items-center justify-between text-mobile-body-sm md:text-pc-body-sm">
                <data className="text-gray-400">
                    {getRelativeTime(updatedAt)}
                </data>
                <Link
                    // TODO 댓글 자세히보기 링크
                    href={`#`}
                    className="text-point-500 underline"
                >
                    자세히 보기
                </Link>
            </div>
        </div>
    )
}
