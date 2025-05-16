'use server'

import { cookies } from 'next/headers'

export const getServerToken = async () => {
    const cookieStore = await cookies()
    const [accessToken, refreshToken] = [
        cookieStore.get('access_token')?.value,
        cookieStore.get('refresh_token')?.value,
    ]

    return [
        accessToken && `access_token=${accessToken}`,
        refreshToken && `refresh_token=${refreshToken}`,
    ]
        .filter((item) => !!item)
        .join('; ')
}
