import Link from 'next/link'

export default function EndDateSection({ endDate }: { endDate: string }) {
    return (
        <section className="flex flex-col gap-2 font-semi-bold">
            <span className="text-mobile-body-md text-gray-600 md:text-pc-body-md">
                마감일
            </span>
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-4 shadow-point md:px-8">
                <Link
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                    href={''}
                >
                    선정 해제
                </Link>
            </div>
        </section>
    )
}
