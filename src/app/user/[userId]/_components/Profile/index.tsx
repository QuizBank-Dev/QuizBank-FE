import clsx from 'clsx'
import { ProfileImage } from '@/components'
import Follow from './Follow'
import BadgeList from './BadgeList'

interface Props {
    _id: string
    nickname: string
    profileImg: string
    introduce?: string
    experience: number
    follower: string[]
}

export default function Profile({
    _id,
    nickname,
    profileImg,
    introduce,
    experience,
    follower,
}: Props) {
    return (
        <div className="flex w-full shrink-0 flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point md:w-[230px]">
            <ProfileImage size={128} profileImg={profileImg} />
            <p className="text-mobile-body-md text-point-900 md:text-pc-body-md">
                {nickname}
            </p>
            <p
                className={clsx(
                    'text-mobile-body-sm text-gray-700 md:text-pc-body-sm',
                    !introduce && '!text-gray-400',
                )}
            >
                {introduce || '아직 소개가 작성되지 않았습니다.'}
            </p>
            <Follow _id={_id} follower={follower} />
            <div className="h-px w-full bg-gray-200" />
            <BadgeList experience={experience} />
        </div>
    )
}
