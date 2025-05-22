'use client'

import LeftArrowIcon from '@/assets/svgs/left-arrow.svg'
import Link from 'next/link'
import StudyStatus from './StudyStatus'
import TitleSection from './TitleSection'
import EndDateSection from './EndDateSection'
import { useGroupQuizbookQuery } from '@/hooks/queries/group-quizbook'
import { useParams } from 'next/navigation'

export default function Detail() {
    const { groupId, quizbookId } = useParams()

    const { data: infoData } = useGroupQuizbookQuery(
        groupId as string,
        quizbookId as string,
    )

    return (
        <div className="flex w-full flex-col gap-8 px-4 pb-4 md:px-0 md:pb-0">
            <div className="hidden items-center gap-4 md:flex">
                <Link href={`/group/${groupId}/quizbook`}>
                    <LeftArrowIcon className="size-6 cursor-pointer" />
                </Link>
                <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                    선정 문제집 활동 상세
                </h2>
            </div>
            <TitleSection
                _id={infoData?.quizbook._id}
                title={infoData?.quizbook.title || '--'}
                category={infoData?.quizbook.category || '--'}
            />
            <EndDateSection endDate={infoData?.endedAt} />
            <StudyStatus quizList={infoData?.quizbook.quizList} />
        </div>
    )
}
