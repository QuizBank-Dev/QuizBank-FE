'use client'

import { useRef, useState, useEffect } from 'react'
import Edit from '@/assets/svgs/edit.svg'
import clsx from 'clsx'
import ProfileImage from '../../../../../components/ProfileImage'

interface EditableProfileImageProps {
    size: number
    profileImg: string
    onChange?: (file: File | null) => void
}

export default function EditProfileImage({
    size,
    profileImg,
    onChange,
}: EditableProfileImageProps) {
    const [preview, setPreview] = useState<string | null>(profileImg || null)
    const [showMenu, setShowMenu] = useState(false)

    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const menuRef = useRef<HTMLDivElement | null>(null)

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        if (!showMenu) return

        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setShowMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showMenu])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onloadend = () => {
            setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)

        onChange?.(file)
        setShowMenu(false)
    }

    const handleReset = () => {
        setPreview(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        onChange?.(null)
        setShowMenu(false)
    }

    const iconSize = Math.max(12, size * 0.15)
    const buttonSize = iconSize + 12

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* 클릭 가능한 이미지 */}
            <div
                className={clsx(
                    'group h-full w-full overflow-hidden rounded-full transition',
                    'bg-gray-300',
                    'cursor-pointer',
                )}
                onClick={() => {
                    if (!preview) {
                        fileInputRef.current?.click()
                    } else {
                        setShowMenu((prev) => !prev)
                    }
                }}
            >
                <ProfileImage size={size} profileImg={preview || ''} />

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />

                {/* 수정 버튼 */}
                <div
                    className="absolute bottom-0 right-0"
                    style={{ width: buttonSize, height: buttonSize }}
                >
                    <div className="relative h-full w-full">
                        <button
                            type="button"
                            className="flex h-full w-full items-center justify-center rounded-full bg-point-500 group-hover:opacity-90"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (!preview) {
                                    fileInputRef.current?.click()
                                } else {
                                    setShowMenu((prev) => !prev)
                                }
                            }}
                        >
                            <Edit
                                style={{ width: iconSize, height: iconSize }}
                            />
                        </button>

                        {/* 드롭다운 메뉴 */}
                        {showMenu && preview && (
                            <div
                                ref={menuRef}
                                className="absolute bottom-full left-full z-10 mt-1 whitespace-nowrap rounded border bg-white shadow-point"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="block w-full px-3 py-1.5 text-left text-mobile-body-sm hover:bg-gray-100 md:px-4 md:py-2 md:text-pc-body-sm"
                                >
                                    사진 변경
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="block w-full px-3 py-1.5 text-left text-mobile-body-sm text-red-500 hover:bg-gray-100 md:px-4 md:py-2 md:text-pc-body-sm"
                                >
                                    기본 이미지
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
