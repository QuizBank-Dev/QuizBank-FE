'use client'

import Image from 'next/image'

interface ProfileImageProps {
    size: number
    profileImg: string
}

export default function ProfileImage({ size, profileImg }: ProfileImageProps) {
    return (
        <Image
            src={profileImg}
            alt="프로필 이미지"
            className={`w-[${size}px] h-[${size}px] rounded-full object-cover`}
        />
    )
}
