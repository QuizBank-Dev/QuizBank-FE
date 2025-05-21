import { DonutProgressbar } from '@/components/study'
import { Props } from './StudyStatus'
import Link from 'next/link'
import { ProfileImage } from '@/components'
import clsx from 'clsx'

export default function StudyStats({
    scoreList,
    memberList,
    activeTab,
}: Partial<Props> & { activeTab: string }) {
    if (!scoreList || !memberList) return null

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
                            ratio={scoreList.length / memberList.length}
                            size={120}
                            strokeWidth={15}
                        >
                            <div className="text-pc-body-lg font-semi-bold">
                                {`${scoreList.length} / ${memberList.length}`}
                            </div>
                        </DonutProgressbar>
                    </div>
                </div>
                <div className="flex h-[227px] flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point md:flex-[2]">
                    <span className="text-mobile-body-lg md:text-pc-body-lg">
                        그룹 학습 완료율
                    </span>
                    <div className="flex w-full flex-col gap-2 overflow-y-auto pr-4">
                        {/* 점수가 있는 유저 먼저 렌더링 */}
                        {scoreList.map((data) => (
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
                        {memberList
                            .filter(
                                (member) =>
                                    !scoreList.some(
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
                                        className="flex items-center gap-2"
                                    >
                                        <ProfileImage
                                            size={32}
                                            profileImg={member.profileImg}
                                        />
                                        {member.nickname}
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
