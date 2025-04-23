'use client'

import ExclamationSvg from '@/assets/svgs/exclamation.svg'

import { Controller, useFormContext } from 'react-hook-form'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface Props {
    id: string
    name: string
    label?: string
    placeholder?: string
    disabled?: boolean
    children?: React.ReactNode
}

export default function CustomSelectRoot({
    id,
    name,
    label,
    placeholder,
    disabled,
    children,
}: Props) {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const error = errors[name]?.message as string | undefined
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const el = triggerRef.current
        const isFocused = document.activeElement === el

        if (el && isFocused && error) {
            setIsOpen(true)
        }
    }, [error])

    return (
        <div className="flex w-full flex-col items-start gap-1">
            {label && (
                <label
                    htmlFor={id}
                    className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm"
                >
                    {label}
                </label>
            )}

            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, ref } }) => (
                    <Select
                        value={value}
                        onValueChange={onChange}
                        disabled={disabled}
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <SelectTrigger
                            ref={(el) => {
                                ref(el)
                                triggerRef.current = el
                            }}
                            id={id}
                            data-error={error && !isOpen}
                        >
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>{children}</SelectContent>
                    </Select>
                )}
            />

            {error && (
                <div className="flex items-center gap-1 px-6 text-danger-400">
                    <ExclamationSvg className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="text-mobile-caption font-regular md:text-pc-caption">
                        {error}
                    </span>
                </div>
            )}
        </div>
    )
}
