import { ENV } from '@/constants/common/env'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: [
                '/api',
                '/quizbook/post',
                '/quizbook/*/study',
                '/quizbook/*/solution',
                '/dashboard',
                '/my-page',
                '/group/*',
                '/login',
                '/signup',
                '/reset-password',
                '/forgot-password',
                '/category',
            ],
        },
        sitemap: `${ENV.SITE}/sitemap.xml`,
    }
}
