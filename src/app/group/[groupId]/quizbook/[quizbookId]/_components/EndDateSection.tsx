import Link from 'next/link'
import EndDateEdit from './EndDateEdit'

export default function EndDateSection({ endDate }: { endDate: string }) {
    return (
        <section className="flex flex-col gap-2 font-semi-bold">
            <span className="text-mobile-body-md text-gray-600 md:text-pc-body-md">
                마감일
            </span>
            <div className="flex w-full items-center gap-2 rounded-lg bg-white p-4 shadow-point md:gap-4 md:px-8">
                <EndDateEdit endDate={endDate} />
                <Link
                    className="btn-solid btn-mobile-sm md:btn-pc-sm"
                    href={''}
                >
                    선정해제
                </Link>
            </div>
        </section>
    )
}
