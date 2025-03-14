'use client'

import { useFormContext } from 'react-hook-form'
import Exclamation from '@/assets/svgs/exclamation.svg'

type CustomInputProps = {
    id: string
    name: string
    type?: string
    label?: string
    placeholder?: string
    style?: 'solid' | 'outline'
    error?: string
    disabled?: boolean
}

export default function CustomInput({
    id,
    name,
    type = 'text',
    label,
    placeholder = '',
    style = 'solid',
    error,
    disabled = false,
}: CustomInputProps) {
    const { register } = useFormContext()

    const baseStyle = style === 'solid' ? 'input-solid' : 'input-outline'
    const errorStyle = error ? 'input-error' : ''

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
            <input
                id={id}
                {...register(name)}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={`input-mobile md:input-pc ${baseStyle} ${errorStyle} ${!error && 'mb-4'}`}
            />
            {error && (
                <div className="flex items-center gap-1 px-6 text-danger-400">
                    <Exclamation className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="text-mobile-caption font-regular md:text-pc-caption">
                        {error}
                    </span>
                </div>
            )}
        </div>
    )
}
