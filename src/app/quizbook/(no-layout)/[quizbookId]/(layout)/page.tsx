import backgroundImg from '@/assets/pngs/background.png'
import Image from 'next/image'
import StarFullIcon from '@/assets/svgs/star-full.svg'
import UserIcon from '@/assets/svgs/user.svg'
import NoteIcon from '@/assets/svgs/note.svg'
import DateIcon from '@/assets/svgs/date.svg'
import Link from 'next/link'
import { ProfileImage } from '@/components'

export default function Page() {
    return (
        <main className="w-full">
            <section className="relative flex w-full justify-center overflow-hidden">
                {/* 배경 이미지 */}
                <Image
                    src={backgroundImg}
                    alt="배경 이미지"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />

                {/* 보라색 오버레이 */}
                <div className="absolute inset-0 bg-[#271065] opacity-45"></div>

                {/* 안의 텍스트 */}
                <div className="relative z-10 flex w-full max-w-[1056px] flex-col items-start gap-4 p-4 text-white md:py-8">
                    <span className="text-mobile-body-lg md:text-pc-body-lg">
                        {`#네트워크`}
                    </span>
                    <h2 className="text-mobile-title-md md:text-pc-title-md">
                        {`네트워크 마스터를 위한 OX 퀴즈`}
                    </h2>
                    <p className="text-mobile-body-lg md:text-pc-body-lg">
                        {`네트워크 기초부터 HTTP와 HTTPS의 차이를 학습할 수 있는
                        문제집입니다.`}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-2">
                            <StarFullIcon className="size-5 text-[#FDDD51] md:size-6" />
                            {`4.3 (후기 53개)`}
                        </div>
                        <div className="flex items-center gap-2">
                            <UserIcon className="size-5 md:size-6" />
                            {`78.5% (학습자 121명)`}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <Link
                            href={`/user/${321}`}
                            className="flex items-center gap-2"
                        >
                            <ProfileImage size={32} profileImg={''} />
                            {`쭈니`}
                        </Link>
                        <div className="flex items-center gap-2">
                            <NoteIcon className="size-5 md:size-6" />
                            {`20 문제`}
                        </div>
                        <div className="flex items-center gap-2">
                            <DateIcon className="size-5 md:size-6" />
                            {`2025-01-01`}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
