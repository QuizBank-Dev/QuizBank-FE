import backgroundImg from '@/assets/pngs/background.png'
import Image from 'next/image'
import NoteIcon from '@/assets/svgs/note.svg'
import DateIcon from '@/assets/svgs/date.svg'
import Link from 'next/link'
import { ProfileImage } from '@/components'
import Preview from './_components/Preview'
import Review from './_components/Review'
import SideBar from './_components/SideBar'
import { getQuizbookMeta } from '@/lib/api/quizbook'
import { extractKSTDateOnly } from '@/utils/date/dateOnly'
import States from './_components/States'

export default async function QuizbookDetailPage({
    params,
}: {
    params: Promise<{ quizbookId: string }>
}) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId)

    return (
        <main className="no-scrollbar flex w-full flex-1 flex-col items-center overflow-auto">
            <section className="relative flex w-full justify-center">
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
                        {`#${quizbookMeta.category}`}
                    </span>
                    <h2 className="text-mobile-title-md md:text-pc-title-md">
                        {quizbookMeta.title}
                    </h2>
                    <p className="text-mobile-body-lg md:text-pc-body-lg">
                        {quizbookMeta.description}
                    </p>
                    <States />
                    <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <Link
                            href={`/user/${quizbookMeta.author._id}`}
                            className="flex items-center gap-2"
                        >
                            <ProfileImage
                                size={32}
                                profileImg={quizbookMeta.author.profileImg}
                            />
                            {quizbookMeta.author.nickname}
                        </Link>
                        <div className="flex items-center gap-2">
                            <NoteIcon className="size-5 md:size-6" />
                            {`${quizbookMeta.quizList.length} 문제`}
                        </div>
                        <div className="flex items-center gap-2">
                            <DateIcon className="size-5 md:size-6" />
                            {extractKSTDateOnly(quizbookMeta.createdAt)}
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex w-full max-w-[1056px] items-start">
                <div className="flex flex-1 flex-col gap-8 p-4 md:py-8">
                    <Preview quizList={quizbookMeta.quizList.slice(0, 3)} />
                    <Review quizbookId={quizbookId} />
                </div>
                <div className="relative hidden h-full p-4 md:block md:py-8">
                    <SideBar quizbookMeta={quizbookMeta} />
                </div>
            </div>
        </main>
    )
}
