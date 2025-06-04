import { ENV } from '@/constants/common/env'
import { Response } from '@/types/base'

export const getQuizbookIdList = async () => {
    try {
        const res = await fetch(`${ENV.API}/v1/sitemap`, {
            method: 'GET',
            next: { revalidate: 86400 },
        })

        const data: Response<{ quizbookIdList: string[] }> = await res.json()

        return data.result.quizbookIdList
    } catch {
        return []
    }
}
