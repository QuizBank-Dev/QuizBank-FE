import { QuizbookLikeListUI } from './_components'

export default function Page() {
    return (
        <section className="flex flex-col gap-[16px]">
            <h2 className="hidden text-mobile-title-sm font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                찜 한 문제집
            </h2>
            <QuizbookLikeListUI />
        </section>
    )
}
