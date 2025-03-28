'use client'

interface ProfileImageProps {
    size: number
    profileImg: string
}

export default function ProfileImage({ size, profileImg }: ProfileImageProps) {
    return (
        <div
            className="overflow-hidden rounded-full bg-gray-300"
            style={{ width: size, height: size }}
        >
            {profileImg && (
                <img
                    src={profileImg}
                    alt="프로필 이미지"
                    className="h-full w-full object-cover"
                />
            )}
        </div>
    )
}
