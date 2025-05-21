import EndDateEdit from './EndDateEdit'

interface Props {
    endDate: string | undefined
}

export default function EndDateSection({ endDate }: Props) {
    return (
        <section className="flex flex-col gap-2 font-semi-bold">
            <span className="text-mobile-body-md text-gray-600 md:text-pc-body-md">
                마감일
            </span>
            <div className="w-full rounded-lg bg-white p-4 shadow-point md:px-8">
                <EndDateEdit endDate={endDate} />
            </div>
        </section>
    )
}
