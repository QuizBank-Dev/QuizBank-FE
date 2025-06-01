import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import { QueryProvider } from './_providers/QueryProvider'
import { UserPrefetcher } from './_providers/UserPrefetcher'

const pretendard = localFont({
    src: '../static/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
})

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    ),
    title: 'Quizbank - AI 기반 퀴즈 학습 플랫폼',
    description: '누구나 문제를 만들고 풀 수 있는 AI 기반 퀴즈 학습 플랫폼',
    authors: [{ name: 'Quizbank Team', url: 'https://quizbank.store' }],
    icons: {
        icon: [
            {
                url: '/icons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/icons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            { url: '/icons/favicon.ico', rel: 'icon' },
        ],
        apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    },
    manifest: '/site.webmanifest',
    openGraph: {
        title: 'Quizbank - AI 기반 퀴즈 학습 플랫폼',
        description: '누구나 문제를 만들고 풀 수 있는 AI 기반 퀴즈 학습 플랫폼',
        url: 'https://quizbank.store',
        siteName: 'Quizbank',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Quizbank Open Graph Image',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quizbank',
        images: ['/og-image.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" className={`${pretendard.variable} h-full`}>
            <body className={`${pretendard.className} h-full bg-point-50`}>
                <QueryProvider>
                    <UserPrefetcher>
                        {children}
                        <Toaster />
                    </UserPrefetcher>
                </QueryProvider>
            </body>
        </html>
    )
}
