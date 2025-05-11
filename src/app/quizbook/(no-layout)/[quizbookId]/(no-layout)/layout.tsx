import MobileHeader from '@/components/MobileHeader'
import {
    DesktopHeader,
    DesktopMenu,
    MobileMenu,
    StudyMenuBtn,
} from './_components/layout'
import { Quizbook } from '@/types/quizbook'

interface Props {
    params: Promise<{ quizbookId: string }>
    children: React.ReactNode
    comment: React.ReactNode
    aside: React.ReactNode
}

export default async function Layout({ params, children }: Props) {
    const { quizbookId } = await params

    const quizbook: Quizbook<string> = {
        _id: '67fdc5ac1e49a2871aeb6657',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '1',
            nickname: '나',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: false,
        isStudied: true,
    }

    // TODO: 문제집 메타데이터 요청 로직 작성

    return (
        <div className="flex max-h-screen min-h-screen flex-col">
            {/* 데스크탑 헤더 */}
            <DesktopHeader
                title={quizbook.title}
                category={quizbook.category}
            />

            {/* 모바일 헤더 */}
            <MobileHeader backBtn={true} title={quizbook.title}>
                <StudyMenuBtn />
            </MobileHeader>
            <main className="flex flex-1 justify-center overflow-hidden">
                <div className="flex w-full max-w-[1024px] flex-1 flex-col md:flex-row">
                    <div className="relative flex min-h-0 flex-1 flex-col bg-white">
                        {children}
                    </div>
                    <DesktopMenu quizbookId={quizbook._id} />
                </div>
            </main>

            {/* 모바일 메뉴 */}
            <MobileMenu quizbook={quizbook} />
        </div>
    )
}
