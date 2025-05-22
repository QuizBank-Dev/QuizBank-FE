'use client'

import { DonutProgressbar } from '@/components/study'
import Link from 'next/link'
import { ProfileImage } from '@/components'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { useGroupMemberScoreQuery } from '@/hooks/queries/group-quizbook'

interface Props {
    activeTab: string
}

export default function StudyStats({ activeTab }: Props) {
    const { groupId, quizbookId } = useParams()
    const { data: scoreData } = useGroupMemberScoreQuery(
        groupId as string,
        quizbookId as string,
    )

    return (
        <article
            className={clsx(
                'flex-col gap-2 md:flex',
                activeTab === 'stats' ? 'flex' : 'hidden',
            )}
        >
            <span className="hidden text-pc-body-md text-gray-600 md:block">
                학습 현황
            </span>
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-8">
                <div className="flex h-[227px] flex-col items-center justify-between rounded-lg bg-white p-4 shadow-point md:flex-[1]">
                    <span className="text-mobile-body-lg md:text-pc-body-lg">
                        그룹 학습 완료율
                    </span>
                    <div className="py-4">
                        <DonutProgressbar
                            ratio={
                                scoreData
                                    ? scoreData.scoreList.length /
                                      scoreData.memberList.length
                                    : 0
                            }
                            size={120}
                            strokeWidth={15}
                        >
                            <div className="text-pc-body-lg font-semi-bold">
                                {scoreData
                                    ? `${scoreData.scoreList.length} / ${scoreData.memberList.length}`
                                    : '-- / --'}
                            </div>
                        </DonutProgressbar>
                    </div>
                </div>
                <div className="flex h-[227px] flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point md:flex-[2]">
                    <span className="text-mobile-body-lg md:text-pc-body-lg">
                        그룹 학습 완료율
                    </span>
                    <div className="custom-scrollbar flex w-full flex-col gap-2 overflow-y-auto pr-4">
                        {/* 점수가 있는 유저 먼저 렌더링 */}
                        {scoreData &&
                            scoreData.scoreList.map((data) => (
                                <div
                                    key={data.owner._id}
                                    className="flex items-center justify-between text-mobile-body-md font-regular md:text-pc-body-md"
                                >
                                    <Link
                                        href={`/user/${data.owner._id}`}
                                        className="flex items-center gap-2"
                                    >
                                        <ProfileImage
                                            size={32}
                                            profileImg={data.owner.profileImg}
                                        />
                                        {data.owner.nickname}
                                    </Link>
                                    {data.score}점
                                </div>
                            ))}
                        {/* 점수가 없는 유저는 "미완료"로 렌더링 */}
                        {scoreData &&
                            scoreData.memberList
                                .filter(
                                    (member) =>
                                        !scoreData.scoreList.some(
                                            (score) =>
                                                score.owner._id === member._id,
                                        ),
                                )
                                .map((member) => (
                                    <div
                                        key={member._id}
                                        className="flex items-center justify-between text-mobile-body-md font-regular md:text-pc-body-md"
                                    >
                                        <Link
                                            href={`/user/${member._id}`}
                                            className="flex flex-1 items-center gap-2 truncate"
                                        >
                                            <ProfileImage
                                                size={32}
                                                profileImg={member.profileImg}
                                            />
                                            <span className="flex-1 overflow-hidden truncate text-ellipsis whitespace-nowrap">
                                                {member.nickname}
                                            </span>
                                        </Link>
                                        <span className="text-point-500">
                                            학습 미완료!!
                                        </span>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
