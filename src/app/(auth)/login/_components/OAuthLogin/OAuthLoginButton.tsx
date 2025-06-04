'use client'

import clsx from 'clsx'
import {
    OAuthBgColor,
    OAuthIcons,
    ValidProviderList,
} from '@/constants/common/oauthLogin'
import { OAuthProvider } from '@/types/api/auth'
import { oauthLogin } from '@/lib/api/auth'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
    provider: OAuthProvider
    title?: string
}

export default function OAuthLoginButton({ provider, title }: Props) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const Icon = OAuthIcons[provider]
    const bgColor = OAuthBgColor[provider]

    const handleOAuthButtonClick = () => {
        if (!ValidProviderList.includes(provider)) {
            router.push('/login/todo')
            return
        }
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
