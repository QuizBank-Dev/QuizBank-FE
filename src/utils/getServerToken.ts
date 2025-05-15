'use server'

import { cookies } from 'next/headers'

export const getServerToken = async () => {
    const cookieStore = await cookies()
    const [accessToken, refreshToken] = [
        cookieStore.get('access_token')?.value,
        cookieStore.get('refresh_token')?.value,
    ]

    if (!accessToken || !refreshToken) {
        return ''
    }

    return `access_token=${accessToken}; refresh_token=${refreshToken}`
}
