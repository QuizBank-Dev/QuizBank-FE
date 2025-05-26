import QuizLikeUI from './_components/QuizLikeUI'

export default function Page() {
    return (
        <section className="flex flex-1 flex-col gap-[16px]">
            <h2 className="hidden text-mobile-title-sm font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                다시 볼 문제
            </h2>
            <QuizLikeUI />
        </section>
    )
}
