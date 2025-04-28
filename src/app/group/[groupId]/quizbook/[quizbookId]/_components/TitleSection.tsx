import Link from 'next/link'

interface Props {
    _id: string
    title: string
    category: string
}

export default function TitleSection({ _id, title, category }: Props) {
    return (
        <section className="flex flex-col gap-2 font-semi-bold">
            <span className="text-mobile-body-md text-gray-600 md:text-pc-body-md">
                문제집 제목
            </span>
            <div className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-point md:px-8">
                <Link
                    href={`/quizbook/${_id}`}
                    className="cursor-pointer text-mobile-body-lg text-point-900 md:text-pc-body-lg"
                >
                    {title}
                </Link>
                <span className="text-mobile-body-md text-point-500 md:text-pc-body-md">
                    {category}
                </span>
            </div>
        </section>
    )
}
