'use client'

import clsx from 'clsx'
import { LoopAnimation } from '@/components'

interface Props {
    isLoading: boolean
    loadingMessage: string
    children?: React.ReactNode
    onClick?: () => void
    type?: HTMLButtonElement['type']
    size?: 'lg' | 'md' | 'sm'
    className?: string
    disabled?: boolean
}

export default function LoadingButton({
    children,
    isLoading,
    loadingMessage,
    onClick,
    type = 'button',
    size = 'md',
    className,
    disabled,
}: Props) {
    return (
        <button
            type={type}
            className={clsx(
                'btn-solid',
                size === 'lg' && 'btn-mobile-lg md:btn-pc-lg',
                size === 'md' && 'btn-mobile-md md:btn-pc-md',
                size === 'sm' && 'btn-mobile-md md:btn-pc-md',
                isLoading && 'btn-loading',
                className,
            )}
            onClick={onClick}
            disabled={isLoading || disabled}
        >
            {isLoading && <LoopAnimation />}
            {isLoading ? loadingMessage : children}
        </button>
    )
}
