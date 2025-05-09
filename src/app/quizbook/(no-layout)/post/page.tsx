import { PostQuizbookForm } from './_components'

export default function Page() {
    return (
        <div className="flex w-full max-w-[768px] flex-1 flex-col gap-[16px] md:gap-[32px] md:rounded-lg md:bg-white md:p-[32px] md:shadow-point">
            {/* Desktop 제목 영역 */}
            <h2 className="hidden text-center font-extra-bold text-point-900 md:block md:text-pc-title-sm">
                문제집 생성
            </h2>

            {/* Form 영역 */}
            <PostQuizbookForm />
        </div>
    )
}
