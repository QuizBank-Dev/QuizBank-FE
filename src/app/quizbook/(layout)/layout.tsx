import { headers } from 'next/headers'
import DesktopHeader from '@/components/DesktopHeader'
import MobileBottomNav from '@/components/MobileBottomNav'
import MobileHeader from '@/components/MobileHeader'
import { QuizbookListPreFetcher } from './_providers/QuizbookListPreFetcher'
import DesktopFooter from '@/components/DesktopFooter'
import { Metadata } from 'next'
import { ENV } from '@/constants/common/env'

export const metadata: Metadata = {
    title: '문제집 탐색 | Quizbank',
    description: '다양한 문제집을 탐색하고 원하는 주제로 학습을 시작해보세요.',
    alternates: {
        canonical: '/quizbook',
    },
    openGraph: {
        title: '문제집 탐색 | Quizbank',
        description:
            '다양한 문제집을 탐색하고 원하는 주제로 학습을 시작해보세요.',
        url: `${ENV.SITE}/quizbook`,
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
        title: '문제집 탐색 | Quizbank',
        description:
            '다양한 문제집을 탐색하고 원하는 주제로 학습을 시작해보세요.',
        images: ['/images/og/og-image.png'],
    },
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = await headers()
    const url = new URL(headersList.get('x-url') || '')
    const query = Object.fromEntries([...url.searchParams.entries()])

    return (
        <QuizbookListPreFetcher params={{ ...query }}>
            <div className="no-scrollbar flex h-full flex-col items-center overflow-auto bg-point-50 text-gray-900">
                {/* 데스크탑 전용 헤더 */}
                <DesktopHeader />

                {/* 모바일 전용 헤더 */}
                <MobileHeader title="문제집">
                    <MobileHeader.UserMenu />
                </MobileHeader>

                <div className="no-scrollbar flex h-full w-full flex-1 flex-col items-center justify-between overflow-auto">
                    {children}

                    {/* 데스크탑 푸터 */}
                    <DesktopFooter />
                </div>

                {/* 모바일 전용 바텀 Nav */}
                <MobileBottomNav />
            </div>
        </QuizbookListPreFetcher>
    )
}
