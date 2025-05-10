'use client'

import { useRef, useState, useEffect } from 'react'
import Edit from '@/assets/svgs/edit.svg'
import clsx from 'clsx'
import ProfileImage from '@/components/ProfileImage'

interface EditableProfileImageProps {
    size: number
    profileImg: string
    onChange?: (file: File | null) => void
    disabled?: boolean
}

export default function EditProfileImage({
    size,
    profileImg,
    onChange,
    disabled,
}: EditableProfileImageProps) {
    const [preview, setPreview] = useState<string | null>(profileImg || null)
    const [showMenu, setShowMenu] = useState(false)

    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const menuRef = useRef<HTMLDivElement | null>(null)

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

    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* 클릭 가능한 이미지 */}
            <div
                className={clsx(
                    'group h-full w-full overflow-hidden rounded-full transition',
                    'bg-gray-300',
                    'cursor-pointer',
                    disabled && 'pointer-events-none',
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
                <div className="absolute bottom-0 right-0">
                    <button
                        type="button"
                        className={clsx(
                            'flex h-full w-full items-center justify-center rounded-full bg-point-500 p-1.5 text-white',
                            'disabled:!bg-gray-200 disabled:!text-gray-400',
                            !disabled && 'group-hover:brightness-75',
                        )}
                        onClick={(e) => {
                            e.stopPropagation()
                            if (!preview) {
                                fileInputRef.current?.click()
                            } else {
                                setShowMenu((prev) => !prev)
                            }
                        }}
                        disabled={disabled}
                    >
                        <Edit className="size-5" />
                    </button>

                    {/* 드롭다운 메뉴 */}
                    {showMenu && preview && (
                        <div
                            ref={menuRef}
                            className="absolute bottom-full z-10 mt-1 whitespace-nowrap rounded border bg-white shadow-point"
                        >
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="block w-full px-3 py-1.5 text-left text-mobile-body-md hover:bg-gray-100 md:px-4 md:py-2 md:text-pc-body-md"
                            >
                                사진 변경
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="block w-full px-3 py-1.5 text-left text-mobile-body-md text-red-500 hover:bg-gray-100 md:px-4 md:py-2 md:text-pc-body-md"
                            >
                                이미지 삭제
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
