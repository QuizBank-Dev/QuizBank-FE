import Link from 'next/link'
import StarFullIcon from '@/assets/svgs/star-full.svg'

export default function ReviewInduction() {
    return (
        <section className="flex w-full flex-col gap-4 font-semi-bold">
            <h2 className="text-mobile-body-lg md:text-pc-body-lg">
                문제집 후기
            </h2>
            <div className="flex w-full items-start gap-4 rounded-lg bg-[#FFF9DB] p-4">
                <div className="flex flex-1 gap-2 md:gap-4">
                    <StarFullIcon className="size-5 text-[#FDDD51] md:size-6" />
                    <div className="flex flex-1 flex-col gap-2">
                        <span className="text-mobile-body-lg md:text-pc-body-lg">
                            후기를 남겨주세요!
                        </span>
                        <p className="text-mobile-body-md font-regular text-gray-600 md:text-pc-body-md">
                            여러분의 소중한 후기가 다른 학습자들에게 큰 도움이
                            됩니다. 간단한 후기를 남겨주세요.
                        </p>
                    </div>
                </div>
                <Link
                    href={''}
                    className="btn-solid btn-mobile-md md:btn-pc-md"
                >
                    후기 남기기
                </Link>
            </div>
        </section>
    )
}
