import DesktopHeader from '@/components/DesktopHeader'
import SocketProvider from './[groupId]/_components/SocketProvider'
import { Metadata } from 'next'

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
        url: '/group',
    },
    twitter: {
        title: '스터디 그룹 탐색 | Quizbank',
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
