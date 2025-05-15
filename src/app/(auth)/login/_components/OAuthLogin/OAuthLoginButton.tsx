'use client'

import clsx from 'clsx'
import { OAuthBgColor, OAuthIcons } from '@/constants/common/oauthLogin'
import { OAuthProvider } from '@/types/api/auth'
import { oauthLogin } from '@/lib/api/auth'

interface Props {
    provider: OAuthProvider
    title?: string
}

export default function OAuthLoginButton({ provider, title }: Props) {
    const Icon = OAuthIcons[provider]
    const bgColor = OAuthBgColor[provider]

    const handleOAuthButtonClick = () => {
        oauthLogin(provider)
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
