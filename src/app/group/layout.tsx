import DesktopHeader from '@/components/DesktopHeader'
import SocketProvider from './[groupId]/_components/SocketProvider'
import { Metadata } from 'next'
import { ENV } from '@/constants/common/env'

export const metadata: Metadata = {
    title: '스터디 그룹 탐색 | Quizbank',
    description:
        '함께 공부할 그룹을 찾아보고, 함께 학습하며 실력을 높여보세요.',
    keywords: [
        '스터디 그룹',
        '학습 그룹',
        'AI 학습 그룹',
        '그룹 문제집',
        '그룹 채팅',
    ],
    alternates: {
        canonical: '/group',
    },
    openGraph: {
        title: '스터디 그룹 탐색 | Quizbank',
        description:
            '함께 공부할 그룹을 찾아보고, 함께 학습하며 실력을 높여보세요.',
        url: `${ENV.SITE}/group`,
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
        title: '스터디 그룹 탐색 | Quizbank',
        description:
            '함께 공부할 그룹을 찾아보고, 함께 학습하며 실력을 높여보세요',
        images: ['/images/og/og-image.png'],
    },
}

export default function GroupDesktopLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SocketProvider>
            <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
                {/* 데스크탑 전용 헤더 */}
                <DesktopHeader />

                {/* 컨탠츠 */}
                {children}
            </div>
        </SocketProvider>
    )
}
