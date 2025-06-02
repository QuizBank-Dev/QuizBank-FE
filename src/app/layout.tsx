import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import { QueryProvider } from './_providers/QueryProvider'
import { UserPrefetcher } from './_providers/UserPrefetcher'
import { ENV } from '@/constants/common/env'

const pretendard = localFont({
    src: '../static/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
})

export const metadata: Metadata = {
    metadataBase: new URL(ENV.SITE!),
    title: 'Quizbank - AI 기반 퀴즈 학습 플랫폼',
    keywords: [
        '학습',
        '퀴즈',
        '문제집',
        'AI 퀴즈 플랫폼',
        '스터디 그룹',
        '온라인 퀴즈',
        '네트워크 학습',
        '알고리즘 학습',
        '웹 개발 학습',
        '자료구조 학습',
        '데이터베이스 학습',
        '기출 문제',
        '자격증 시험',
        'IT 자격증',
        '정보처리기사',
    ],
    description: '누구나 문제를 만들고 풀 수 있는 AI 기반 퀴즈 학습 플랫폼',
    authors: [
        { name: 'Quizbank Team', url: 'https://github.com/QuizBank-Dev' },
    ],
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
        url: ENV.SITE,
        siteName: 'Quizbank',
        locale: 'ko_KR',
        images: [
            {
                url: `${ENV.SITE}/images/og/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Quizbank 대표 이미지',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quizbank - AI 기반 퀴즈 학습 플랫폼',
        images: ['/images/og/og-image.png'],
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
