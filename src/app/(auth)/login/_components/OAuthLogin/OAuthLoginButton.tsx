'use client'

import clsx from 'clsx'
import {
    OAuthBgColor,
    OAuthIcons,
    OAuthProvider,
} from '@/constants/common/oauthLogin'

interface Props {
    provider: OAuthProvider
    title?: string
}

export default function OAuthLoginButton({ provider, title }: Props) {
    const Icon = OAuthIcons[provider]
    const bgColor = OAuthBgColor[provider]

    const handleOAuthButtonClick = () => {
        console.log(provider)
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
