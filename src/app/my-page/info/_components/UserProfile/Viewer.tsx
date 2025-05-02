import { ProfileImage } from '@/components'
import { useCurrentUser } from '@/hooks/queries'
import clsx from 'clsx'

interface Props {
    onEditMode: () => void
}

export default function Viewer({ onEditMode }: Props) {
    const { data: user } = useCurrentUser()

    if (!user) {
        return null
    }

    return (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point">
            <ProfileImage size={128} profileImg={user.profileImg} />
            <p className="text-mobile-body-md text-point-900 md:text-pc-body-md">
                {user.nickname}
            </p>
            <p
                className={clsx(
                    'text-mobile-body-sm text-gray-700 md:text-pc-body-sm',
                    !user.introduce && '!text-gray-400',
                )}
            >
                {user.introduce || '아직 소개가 작성되지 않았습니다.'}
            </p>
            <button
                className="btn-solid btn-mobile-lg w-full md:btn-pc-lg"
                onClick={onEditMode}
            >
                프로필 편집
            </button>
        </div>
    )
}
