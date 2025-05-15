'use client'

import clsx from 'clsx'
import { OAuthBgColor, OAuthIcons } from '@/constants/common/oauthLogin'
import { OAuthProvider } from '@/types/api/auth'
import { oauthLogin } from '@/lib/api/auth'
import { useSearchParams } from 'next/navigation'

interface Props {
    provider: OAuthProvider
    title?: string
}

export default function OAuthLoginButton({ provider, title }: Props) {
    const searchParams = useSearchParams()
    const Icon = OAuthIcons[provider]
    const bgColor = OAuthBgColor[provider]

    const handleOAuthButtonClick = () => {
        const token = searchParams.get('token')
        oauthLogin(provider, token ? `group/invitation?token=${token}` : '')
    }

    return (
        <button
            title={title}
            className={clsx(
                'rounded-[10px] border-1 border-gray-200 p-4',
                bgColor,
            )}
            onClick={handleOAuthButtonClick}
        >
            <Icon />
        </button>
    )
}
