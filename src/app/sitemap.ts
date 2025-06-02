import { ENV } from '@/constants/common/env'
import { getQuizbookIdList } from '@/lib/api/quizbook'
import { MetadataRoute } from 'next'

export default async function generateSitemaps() {
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: `${ENV.SITE}/`,
            priority: 1.0,
        },
        {
            url: `${ENV.SITE}/quizbook`,
            priority: 0.8,
        },
        {
            url: `${ENV.SITE}/group`,
            priority: 0.7,
        },
    ]

    const quizbookIdList = await getQuizbookIdList()

    const dynamicUrls: MetadataRoute.Sitemap = quizbookIdList.map((id) => ({
        url: `${ENV.SITE}/quizbook/${id}/info`,
        priority: 0.9,
    }))

    return [...staticUrls, ...dynamicUrls]
}
