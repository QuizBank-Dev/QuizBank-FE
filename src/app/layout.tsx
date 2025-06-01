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
    title: 'Quizbank: AI 채점 및 문제 검증 기반 오픈 퀴즈 플랫폼',
    description:
        'AI가 문제를 자동으로 검토하고 채점해주는 새로운 학습 플랫폼. 누구나 직접 문제를 만들고 풀며 지식을 공유하고 성장할 수 있습니다.',
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
